import { useReducer } from "react";

const initialState = { count: 0 };
type CounterState = { count: number };
type CounterAction = { type: string; payload: number };

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.payload };
    case "DECREMENT":
      return { count: state.count - action.payload };
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
    </>
  );
};
