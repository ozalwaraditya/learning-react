import { resetFromDestinationSlice } from "../../redux/slice/destinationSlice";
import CounterLayout from "./CounterLayout";
import DestinationLayout from "./DestinationLayout";
import { useDispatch, useSelector } from "react-redux";

function ReduxLayout() {
  const dispatch = useDispatch();
  const destinations = useSelector(
    (state) => state.destinationStore.destination,
  );

  return (
    <div className="container min-vh-100 d-flex flex-column align-items-center py-5">
      <CounterLayout />
      <div>
        <h2 className="mb-4">Destination Details Display</h2>
        <button
          onClick={() => {
            dispatch(resetFromDestinationSlice());
          }}
          className="btn btn-primary"
        >
          resetFromDestinationSlice
        </button>
      </div>
      <div className="row justify-content-center w-100 mt-4">
        {destinations.map((destination, index) => (
          <DestinationLayout key={index} destination={destination} />
        ))}
      </div>
    </div>
  );
}

export default ReduxLayout;
