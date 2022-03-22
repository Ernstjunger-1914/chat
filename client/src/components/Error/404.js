import React from 'react';
import { Link } from 'react-router-dom';
import './404.css'

function NotFound() {
    return (
      <div className='Container'>
        <h1>존재하지 않는 페이지입니다.</h1>
        <Link to='/' className='Gohome'>홈 페이지로 돌아가기</Link>
      </div>
    );
  }

export default NotFound;