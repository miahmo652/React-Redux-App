import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { getQuote } from '../actions';
import styled from 'styled-components'

const H2 = styled.h2`
font-size: 1.8rem;
font-family: "Lucida Console", Monaco, monospace;
`
const P = styled.p `
font-size: .8rem;
font-family: "Lucida Console", Monaco, monospace;
`

const Quote = (props) => {

    useEffect(()=>{
        getQuote()

    }, [getQuote])
if (props.isFetching){
    return <h2>Loading...</h2>
}
    return (
     <div>

         {/* <h2>Quotes: {props.quoteText, props.quoteAuthor, props.quoteGenre}</h2>*/}
         <H2>Quotes:{props.quoteText.quoteText}</H2>
         <p>Author: {props.quoteText.quoteAuthor}</p>
         <p>Genre: {props.quoteText.quoteGenre}</p>
         <button onClick={()=>props.getQuote()}>Get new quote</button>

    </div>
    )
        
        
    
}
const mapStateToProps = state =>{
    return {
    quoteText: state.quoteText,
    isFetching: state.isFetching,
    error: state.error
    /*  quoteText: state.quoteText,
    quoteAuthor: state.quoteAuthor,
    quoteGenre: state.quoteGenre, */
    }
}
export default connect(mapStateToProps, {getQuote})(Quote);
//https://quote-garden.herokuapp.com/api/v2/quotes/random