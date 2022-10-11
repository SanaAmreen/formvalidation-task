const initialState = {
    data :[]
}

export const PersonalDetailsReducer = (state=initialState,action)=>{
    switch (action.type) {
        case "ADD_PERSONAL_DETAILS":
          return {
            ...state,
            data: [...state.data, action.value],
          };
          case "ADD_CONTACT_DETAILS":
            return{...state, data:[...state.data, action.value]};

            case "ADD_PREVIOUS_ADRESS":
              return{...state, data:[...state.data, action.value]}
          default:
            return state;
        }
}
