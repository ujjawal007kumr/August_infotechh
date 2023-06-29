import React from 'react';
import ChatApp from './ChatApp';
import CountdownTimer from './CountdownTimer';

const App = () => {
  const targetTime = 120;

  return(
    <div>
      <CountdownTimer targetTime={targetTime}/>
      <ChatApp/>
    </div>
  );
};

export default App;
