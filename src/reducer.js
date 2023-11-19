import { initialState } from "./actions";

export const reducer = (currentState, action) => {
  switch (action.type) {
    case 'dec': return { ...currentState, count: currentState.count - currentState.step };
    case 'inc': return { ...currentState, count: currentState.count + currentState.step };
    case 'setCount': return { ...currentState, count: action.payload };
    case 'setStep': return { ...currentState, step: action.payload };
    case 'reset': return initialState;
    default: throw new Error('Unknown action');
  }
};
