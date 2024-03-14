const initialState = {
  dataWishlist: [],
}

const dataWishlist = (state = initialState, action: any) => {
  switch (action.type) {
    case '@APP/WISHLIST':
      return {
        ...state,
        dataWishlist: action.payload,
      }
  }
  return state
}

export default dataWishlist
