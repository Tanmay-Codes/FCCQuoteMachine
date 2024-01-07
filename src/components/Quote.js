import React, { useEffect, useState } from 'react'
import { FaTwitter } from "react-icons/fa";

export default function Quote() {
    const [quote, setQuote] = useState({content : "", author:""})
    const [color, setColor] = useState("green")
    const getQuote = ()=>{
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        setColor(randomColor)
        fetch('https://api.quotable.io/random').then(res=> res.json()).then(data=>setQuote({content : data.content, author:data.author}))
    }
    useEffect(()=>{
        getQuote()
    },[])
  return (
    <div className='container' style={{backgroundColor : `${color}`}}>
    <div id="quote-box" >
        <p id='text' ><span style={{fontSize:"30px"}}>&#8220;</span>
{quote.content}</p>
        <p id='author' >{quote.author}</p>
        <div className='buttons' >
        <a id='tweet-quote' className='btn' href='http://twitter.com/intent/tweet' target='_blank' style={{backgroundColor : `${color}`}} >
    <FaTwitter/>
        </a>
        <button id='new-quote' className='btn' onClick={getQuote} style={{backgroundColor : `${color}`}} >New Quote</button>
        </div>

    </div>
    </div>
  )
}
