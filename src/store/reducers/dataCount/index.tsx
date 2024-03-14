const initialState = {
  increment: 0,
}

const dataCount = (state = initialState, action: any) => {
  switch (action.type) {
    case '@APP/COUNT':
      return {
        ...state,
        increment: action.payload,
      }
  }
  return state
}

export default dataCount
