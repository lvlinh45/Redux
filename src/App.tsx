import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { decrement, increment } from "./redux/counter/counter.slide";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import Button from "react-bootstrap/Button";

function App() {
  // state là store của redux
  // const count = useSelector((state: RootState) => state.counter);
  const count = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <h1>My current count = {count.value}</h1>
        <Button variant="warning">Test Bootstrap</Button>
      </div>
      <div>
        <button onClick={() => dispatch(increment())}>Increase</button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrease
        </button>
      </div>
    </>
  );
}

export default App;
