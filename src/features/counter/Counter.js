import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement, reset, incrementByAmount} from './counterSlice';
import { useState } from 'react';

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    const [amountToAdd, setAmountToAdd] = useState(0);
    const addValue = Number(amountToAdd) || 0;
    const resetAll = () => {
        setAmountToAdd(0);
        dispatch(reset());
    }
  return (
    <section>
        <h1>Counter</h1>
        <p>{count}</p>
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
        <input
            type='text'
            value={amountToAdd}
            onChange={(e) => setAmountToAdd(e.target.value)} 
        />
        <div>
            <button onClick={() => dispatch(incrementByAmount(addValue))}>Add value</button>
            <button onClick={resetAll}>Reset</button>
        </div>
    </section>
  )
}

export default Counter;
