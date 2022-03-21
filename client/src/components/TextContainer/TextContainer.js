import React from 'react';
import online from '../../icons/onlineIcon.png';
import './TextContainer.css';

const TextContainer  = ({ users }) => (
    <div className='textContainer'>
        <div>
            <h1>실시간 채팅<span role='img' aria-label='emoji'>💬</span></h1>
            <h2>지금 바로 사용해보세요<span role='img' aria-label='emoji'>⬅️</span></h2>
        </div>
        {
            users
            ? (
                <div>
                    <h1>현재 접속 중인 사람들</h1>
                    <div className='activeContainer'>
                        <h2>
                            {
                                users.map(({name})=> (
                                    <div key={name} className='activeItem'>
                                        {name}
                                        <img alt='Online' src={online} />
                                    </div>
                                ))
                            }
                        </h2>
                    </div>
                </div>
            )
            : null
        }
    </div>
);

export default TextContainer;