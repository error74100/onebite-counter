import './App.css';
import CounterView from './components/CounterView';
import ButtonView from './components/ButtonView';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const onClickButton = (value) => {
    if (String(value) === String(0)) {
      setCount(0);
    } else {
      setCount(count + value);
    }
  };

  return (
    <div className="wrap">
      <h2>Simple Counter</h2>
      <CounterView count={count} />
      <ButtonView onClickButton={onClickButton} />
    </div>
  );
}

export default App;
