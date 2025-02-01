import { useReducer } from "react";

const initialState = { count: 0 };
type CounterState = { count: number };
type UpdateAction = { type: "INCREMENT" | "DECREMENT"; payload: number };
type ResetAction = { type: "RESET" };
type CounterAction = UpdateAction | ResetAction;

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.payload };
    case "DECREMENT":
      return { count: state.count - action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      {state.count}

      <button
        className="btn"
        onClick={() => dispatch({ type: "INCREMENT", payload: 10 })}
      >
        Incremeant
      </button>
      <button
        className="btn"
        onClick={() => dispatch({ type: "DECREMENT", payload: 10 })}
      >
        Decrement
      </button>
      <button className="btn" onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>
    </>
  );
};
