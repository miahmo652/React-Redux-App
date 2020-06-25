import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { getQuote } from '../actions';
import styled from 'styled-components'

const H2 = styled.h2`
font-size: 1.5rem;
font-family: "Lucida Console", Monaco, monospace;
color: red;
`
const Button = styled.button`
background-color: rgba(213, 114, 233, 0.884);
border: none;
color: white;
padding: 10px 22px;
text-align: center;
text-decoration: none;

font-size: 16px;
`
const P = styled.p `
font-size: 1rem;
font-family: "Lucida Console", Monaco, monospace;
color: crimson;
`
const H1 = styled.h1`
font-size: 3rem;
font-family:"Lucida Console", Monaco, monospace;
color: red;`
const Loading = styled.h2`
font-size: 3.5rem;
color: red;
`

const Quote = (props) => {

    useEffect(()=>{
        getQuote()

    }, [])
if (props.isFetching){
    return <Loading>Opening Fortune cookie...</Loading>
}
    return (
     <div>

        <H1>Random Quotes</H1>
         <H2>{props.quoteText.quoteText}</H2>
         <P>{props.quoteText.quoteAuthor}</P>
         <P>{props.quoteText.quoteGenre}</P>
         <Button onClick={()=>props.getQuote()}>Get new quote</Button>

    </div>
    )
        
        
    
}
const mapStateToProps = state =>{
    return {
    quoteText: state.quoteText,
    isFetching: state.isFetching,
    error: state.error
   
    }
}
export default connect(mapStateToProps, {getQuote})(Quote);
