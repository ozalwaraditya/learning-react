import { useState } from "react";
import attack from "./Images/attack.png";
import defend from "./Images/defend.png";

function Counter() {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState("");

  function handleIncrement() {
    setCount((prevCount) => prevCount + 1);

    // ❌ Avoid modifying the state variable directly
    // setState(count += 1);

    // ⚠️ This works in simple cases, but is not recommended when
    // the next state depends on the previous state.
    // setState(count + 1);

    /*
    How setState works

    - Calling setState() does NOT update the state immediately.
    - React schedules the update and performs a re-render later.
    - Multiple state updates may be batched together for performance.

    Example:

      setState(count + 1);
      setState(count + 1);
      setState(count + 1);
      setState(count + 1);

    If count is 0, all four calls use the same value (0).

      0 + 1 = 1
      0 + 1 = 1
      0 + 1 = 1
      0 + 1 = 1

    Final result:
      count = 1

    ----------------------------------------

    To update based on the previous value,
    use the callback form:

      setState(prev => prev + 1);
      setState(prev => prev + 1);
      setState(prev => prev + 1);
      setState(prev => prev + 1);

    React passes the latest state to each callback:

      0 -> 1 -> 2 -> 3 -> 4

    Final result:
      count = 4

    ✅ Use the callback form whenever the next state
       depends on the previous state.
  */
  }
  function handleDecrement() {
    setCount((prevCount) => prevCount - 1);
  }

  function handleStatus() {
    setStatus(() => {
      return count > 0 ? "Won" : "Loss";
    });
  }
  function handleReset() {
    setCount(0);
    setStatus("");
  }

  return (
    <>
      <h3 className="text-center pt-3">CountOPedia</h3>

      <div className="container text-center mt-5 text-white">
        <p className="mb-4">Counter : {count}</p>
        <p className="mb-4">Game status : {status}</p>

        <div className="d-flex justify-content-center gap-3">
          <img
            src={attack}
            alt="Attack"
            className="img-fluid"
            style={{ width: "150px", height: "150px", objectFit: "contain" }}
            onClick={handleIncrement}
          />

          <img
            src={defend}
            alt="Defend"
            className="img-fluid"
            style={{ width: "150px", height: "150px", objectFit: "contain" }}
            onClick={handleDecrement}
          />
        </div>
        <div className="mt-4 text-center">
          <button onClick={handleStatus} className="btn btn-primary me-2">
            Status
          </button>
          <button onClick={handleReset} className="btn btn-danger">
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
