import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  decrement,
  increment,
  decrementMultiplier,
  incrementMultiplier,
} from "../../redux/slice/counterSlice";

function CounterLayout() {
  const count = useSelector((state) => state.counterStore.count);
  const dispatch = useDispatch();

  const [multiplier, setMultiplier] = useState(10);

  return (
    <div className="container mt-5 text-center">
      <div>
        <h2 className="mb-4">Redux Counter</h2>
      </div>

      <h3 className="mb-3">Count: {count}</h3>

      <div>
        <button
          className="btn btn-danger me-2"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <button
          className="btn btn-success"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
      </div>

      <div className="pt-4">
        <input
          className="form-control d-inline-block w-auto me-2"
          type="number"
          value={multiplier}
          onChange={(e) => setMultiplier(Number(e.target.value))}
        />

        <button
          className="btn btn-danger me-2"
          onClick={() => dispatch(decrementMultiplier(multiplier))}
        >
          Decrement {multiplier}
        </button>

        <button
          className="btn btn-success"
          onClick={() => dispatch(incrementMultiplier(multiplier))}
        >
          Increment {multiplier}
        </button>
      </div>
      <hr />
    </div>
  );
}

export default CounterLayout;
