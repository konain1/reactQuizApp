import React from 'react'
import {database}  from'./dataBase'
import {useDispatch,useSelector} from 'react-redux'
import { addData } from '../features/quizSlice';
import { createNextState } from '@reduxjs/toolkit';
import { useState } from 'react';


function QuizPage() {


    let nextBtn = "next"
    const StoreData = useSelector((state)=> state.quizReducer.quizData)

    const [data,setData] = useState([])
    const dispatch = useDispatch();
    const storeHandler = ()=>{

        dispatch(addData(database))
        setIndex(index+1)
        setData(database)

    }

    const [index,setIndex] = useState(-1)
  
   
    let ansObj = []

    const indexHandler = ()=>{

        index<data.length?setIndex(index+1):setIndex(0)
    }

    

    // console.log(index)
   

    



  return (
    <div className='main-cont'>
      
      <div className='quizPage'>
      {
        StoreData?.slice(index,index+1).map((data)=>{
            
             data.ans?.map((ans)=>{
                        return ansObj.push(ans)
                    })
                
            return(
                <>
                <div className='questionArea'>
                <h1  className='the-question'>{data.question}</h1>
                  </div>
               
                
                    {ansObj?.map((ans,i)=>{
                        return(<button >{ans.text}</button>)
                    })}
                </>
            )
        })
      }
        
        
      </div>
      
      <button id='next' onClick={index < 0 ?storeHandler:indexHandler}>{ index < 0  || index >= data.length ? nextBtn = "Play":nextBtn = "Next"}</button>

    {/* <button onClick={storeHandler}>AddData</button> */}
    </div>
  )
}

export default QuizPage
