import React from 'react'; // eslint-disable-line no-unused-vars

const Header = () => {
  const todayTime = () => {
    let now = new Date();
    let todayYear = now.getFullYear();
    let todayMonth = now.getMonth() + 1;
    let todayDate = now.getDate();
    const week = [
      '일요일',
      '월요일',
      '화요일',
      '수요일',
      '목요일',
      '금요일',
      '토요일'
    ];
    let dayOfWeek = week[now.getDay()];

    return `${todayYear}.${todayMonth}.${todayDate} ${dayOfWeek}`;
  };
  return (
    <div className="header">
      <h1>Todo List</h1>
      <hr />
      <h5>Today : {todayTime().slice(0, 14)}</h5>
    </div>
  );
};

export default Header;
