import React from 'react'
import {database}  from'./dataBase'
import {useDispatch,useSelector} from 'react-redux'
import { addData } from '../features/quizSlice';
import { createNextState } from '@reduxjs/toolkit';


function QuizPage() {


    let nextBtn = "next"
    const StoreData = useSelector((state)=> state.quizReducer.quizData)


    const dispatch = useDispatch();
    const storeHandler = ()=>{

        dispatch(addData(database))

    }
    let score = 0;
    let index = 0;

    const questionHandler = ()=>{
       index++
    }

    

    console.log(index)
   

    let ansObj = []



  return (
    <div className='main-cont'>
      
      <div className='quizPage'>
      {
        StoreData?.slice(index,index+1).map((data,index)=>{
            
             data.ans?.map((ans)=>{
                        return ansObj.push(ans)
                    })
                
            return(
                <>
                <div className='questionArea' key={index}>
                <h1 key={index} className='the-question'>{data.question}</h1>
                  </div>
               
                
                    {ansObj?.map((ans,i)=>{
                        return(<button key={1}>{ans.text}</button>)
                    })}
                </>
            )
        })
      }
        
        
      </div>
      
      <button id='next' onClick={questionHandler}>{score===0 || score === 0 ?nextBtn = "Play":nextBtn = "Next"}</button>

    <button onClick={storeHandler}>AddData</button>
    </div>
  )
}

export default QuizPage
