
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from '../../Services/Actions/CounterActions';

const Counter = () => {

    const count = useSelector((state =>
        state.count))

    const dispatch  = useDispatch()


    const handleIncrement = () => {
        dispatch(incrementCounter())


    }
    const handleDecrement = () => {
        dispatch(decrementCounter())


    }
    const handleReset = () => {
        dispatch(resetCounter())


    }

    return (
        <div>
            <h2>count:{count}</h2>
            <button onClick={handleIncrement}>increament</button>
            <button onClick={handleDecrement}>decreament</button>
            <button onClick={handleReset}>reset</button>
        </div>
    );
};

export default Counter;