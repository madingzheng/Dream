import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

export const initialSate = {
  value: 2,
}

type Action =
  | {
      type: 'counter/incremented'
    }
  | { type: 'counter/decremented' }

const counterReducer = (state = initialSate, action: Action) => {
  switch (action.type) {
    case 'counter/incremented':
      return { ...state, value: state.value + 1 }
    case 'counter/decremented':
      return { ...state, value: state.value - 1 }
    default:
      return state
  }
}

const store = createStore(counterReducer, composeWithDevTools())

export default store
