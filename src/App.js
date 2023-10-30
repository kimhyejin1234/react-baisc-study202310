import React from 'react';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import NoName from './NoName';
function App() {
  const $h2 = React.createElement('h2', null, '반가와요~~');
  const $h3 = <h3>와~~~~우!!!</h3>;

  return (
    <>
      <NoName />
      <NoName />
      <NoName />
      <div className='App'>
        <h1>메롱 메롱</h1>
        {$h2}
        {$h3}
      </div>
      <div className='noname'>
        <input type='text' />
        <p>
          오늘은 월요일 입니다. <br />
          그래서 공부가 하기 싫어요.~~~~
        </p>
      </div>
    </>
  );
}

export default App;
