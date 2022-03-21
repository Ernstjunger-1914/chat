const users = [];

const addUser = ({ id, name, room }) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const existingUser = users.find((user)=> user.room === room && user.name === name);

    if(!name || !room) {
        return {
            error: "이름과 채팅방이 필요합니다."
        };
    }

    if(existingUser) {
        return {
            error: "같은 이름이 이미 존재합니다."
        };
    }

    const user = { id, name, room };

    return { user };
}

const removeUser = (id) => {
    const index = users.findIndex((user)=> user.id === id);

    if(index !== -1) {
        return users.splice(index, 1)[0];
    }
}

const getUser = (id) => users.find((user)=> user.id === id);
const getUsersInRoom = (room) => users.filter((user)=> user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };