import { ref } from "vue";

export function useReducer(reducer, initialState) {
  const state = ref(initialState);

  const dispatch = (action) => {
    state.value = reducer(state.value, action);
  };

  return [state, dispatch]
}
