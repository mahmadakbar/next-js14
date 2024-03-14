const initialState = {
  dataChart: [],
}

const dataChart = (state = initialState, action: any) => {
  switch (action.type) {
    case '@APP/ADDCHART':
      return {
        ...state,
        dataChart: action.payload,
      }
  }
  return state
}

export default dataChart
