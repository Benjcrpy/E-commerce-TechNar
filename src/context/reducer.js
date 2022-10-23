export const actionType = {
    SET_USER: "SET_USER",
    SET_COMPUTER_ITEMS: "SET_COMPUTER_ITEMS"
  };
  
  const reducer = (state, action) => {
     console.log(action);
  
    switch (action.type) {
      case actionType.SET_USER:
        return {
          ...state,
          user: action.user,
        };

        case actionType.SET_COMPUTER_ITEMS:
        return {
          ...state,
          computerItems: action.computerItems,
        };

      default:
        return state;
    }
  };
  
  export default reducer;