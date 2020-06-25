import axios from 'axios';


export const getQuote = () => dispatch => {
    dispatch({type:"FETCH_QUOTE"});
    axios
    .get('https://quote-garden.herokuapp.com/api/v2/quotes/random')
    .then(res =>{
        console.log(res);
        dispatch({type: "QUOTE_SUCCESS", payload: res.data.quote})
    })
    .catch(err =>{
        console.log(err);
    })
}

