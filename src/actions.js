import { useReducer } from './useReducer'
import { reducer } from './reducer'

export const initialState = { count: 0, step: 1 };

const [state, dispatch] = useReducer(reducer, initialState)

export const dec = () => dispatch({ type: 'dec' });
export const inc = () => dispatch({ type: 'inc' });
export const defineCount = (e) => dispatch({ type: 'setCount', payload: Number(e.target.value) });
export const defineStep = (e) => dispatch({ type: 'setStep', payload: Number(e.target.value) });
export const reset = () => dispatch({ type: 'reset' });

export default state
