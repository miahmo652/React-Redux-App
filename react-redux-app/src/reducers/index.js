const initialState ={
    loading: false,
    quoteText: [

    ],
    isFetching: false,
    error: "",
   
}


export const reducer = (state= initialState, action) => {
switch(action.type) {
    case "FETCH_QUOTE":
        return{
                 ...state,
            isFetching: true,
            error: ""
            }
        
           
        
    case "QUOTE_SUCCESS":
        return{
            ...state,
            quoteText: action.payload,
            isFetching: false
            }
            
                

    default:
        return state;
}
}

