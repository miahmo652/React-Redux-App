import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { getQuote} from '../actions';

const Quote = (props) => {
    useEffect(()=>{
        getQuote()
        
    }, [getQuote])
if (props.isFetching){
    return <h2>Loading...</h2>
}
    return (
     <div>
         <h2>Quotes: {props.quoteText, props.quoteAuthor, props.quoteGenre}</h2>
         <button onClick={()=>props.getQuote()}>Get new quote</button>

    </div>
    )
        
        
    
}
const mapStateToProps = state =>{
    return {
    quoteText: state.quoteText,
    quoteAuthor: state.quoteAuthor,
    quoteGenre: state.quoteGenre,
    isFetching: state.isFetching,
    error: state.error
    }
}
export default connect(mapStateToProps, {getQuote})(Quote);
//https://quote-garden.herokuapp.com/api/v2/quotes/random