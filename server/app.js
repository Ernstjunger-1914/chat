'use strict';

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const http = require('http');
const socketio = require('socket.io');
const { addUser, removeUser, getUser, getUsersInRoom } = require('./models/user');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
const PORT = 3333;
const server = http.createServer(app);
const io = socketio(server);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

io.on('connect', (socket)=> {
  socket.on('join', ({ name, room }, callback) => {
    const { err, user } = addUser({ id: socket.id, name, room });

    if(err) {
      return callback(err);
    }

    socket.join(user.room);
    socket.emit('message', { user: 'admin', text: `${user.name}님, ${user.room} 채팅방에 오신 것을 환영합니다.` });
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name}님이 입장했습니다.` });

    io.to(user.room).emit('roomData', { room: user.room, user: getUsersInRoom(user.room) });

    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if(user) {
      io.to(user.room).emit('message', { user: 'admin', text: `${user.name}님이 퇴장했습니다.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
    }
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(PORT, ()=> {
  console.log(`Server has running on port ${PORT}`);
});

module.exports = app;
