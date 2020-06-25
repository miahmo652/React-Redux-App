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

/* const initialState ={
    loading: false,
    quoteText: null,
    isFetching: false,
    error: "",
    quoteAuthor: null,
    quoteGenre: null
}


export const reducer = (state= initialState, action) => {
switch(action.type) {
    case "FETCH_QUOTE":
        return [
            {
                ...state,
                isFetching: true,
                error: ""
            }
        ]
           
        
    case "QUOTE_SUCCESS":
        return[
            {
            ...state,
            quoteText: action.payload.quoteText,
            quoteAuthor: action.payload.quoteAuthor,
            quoteGenre: action.payload.quoteGenre,
            isFetching: false
            }
            
         ] 
            
          
        

    default:
        return state;
}
}
*/