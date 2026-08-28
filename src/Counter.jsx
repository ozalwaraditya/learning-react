import { useEffect, useState } from "react";
import attack from "./Images/attack.png";
import defend from "./Images/defend.png";

function Counter() {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState("");

  // The above thing can also be achieve with object
  const [gameStatus, setGameStatus] = useState({
    count: 0,
    status: "",
  });
  /* There is one complexity with object and with status is that -- if we want to change the state
    it will assing null value is we don't pass the older or updated value to other object
    -- To handle this 
    setGameStatus((prev)=>{
        ...prev,
        status : "new"});

    This will preserve the other properties of the object and will update the required on only.
  */

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

  function handleReset() {
    setCount(0);
    setStatus("");
  }

  // This let you run the side effects in ur function Component
  useEffect(() => {
    if (count >= 5) {
      setStatus("You Won!!!");
    } else if (count <= -5) {
      setStatus("You Lost");
    } else {
      setStatus("");
    }
  }, [count]);

  return (
    <>
      <h3 className="text-center pt-3">CountOPedia</h3>

      <div className="container text-center mt-5 text-white">
        <p className="mb-4">Counter : {count}</p>
        {/* Conditional Rendering */}
        {/*
            {condition && jsx}  
            This is common pattern in React where showing something on UI only when some condition is true.
        */}
        {status.length > 0 && <p className="mb-4">Game status : {status}</p>}
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
          <button onClick={handleReset} className="btn btn-danger">
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
