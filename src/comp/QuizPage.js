import React from 'react'
import {database}  from'./dataBase'
import {useDispatch,useSelector} from 'react-redux'
import { addData } from '../features/quizSlice';
import { createNextState } from '@reduxjs/toolkit';
import { useState } from 'react';


function QuizPage() {


    let nextBtn = "next"
    // const [nextBtn,setNextBtn] = useState('Next')
    const StoreData = useSelector((state)=> state.quizReducer.quizData)


    const [Quizdata,setData] = useState([])
    const dispatch = useDispatch();
    const [isSelected, setisSelected] = useState(false);
    const [selectedButton,setSelectedButton] = useState(null)
    const storeHandler = ()=>{

        dispatch(addData(database))
        setIndex(index+1)
        setData(database)

    }

    const [index,setIndex] = useState(-1)
    const [trueFalse,SetTrueFalse] = useState(false)
    const [score,setScore] = useState(0)
  
   


    const indexHandler = ()=>{

        index<Quizdata.length?setIndex(index+1):setIndex(0)

        setisSelected(false)
       
        if(index < Quizdata.length){

            if(selectedButton){
                // console.log( document.querySelectorAll('.btns')[selectedButton]);
                document.querySelectorAll('.btns')[selectedButton].style.backgroundColor = ''
            }
        }else{
            setScore(0)
        }
    }

    

    console.log(selectedButton)

    const answerPicker=(event,ans,i)=>{
        setisSelected(true);
        setSelectedButton(i)
       if(ans.correct){
       
        event.target.style.backgroundColor = 'green';
        setScore(score+1)

       }
       else {
        event.target.style.backgroundColor = 'red';

       }

    }
//    console.log( "score" +index)

    
    // const playBtn = document.querySelector('')


  return (
    <div className='main-cont'>
      
      <div className='quizPage'>

      {index < Quizdata.length ? <>
        {
        
        StoreData?.slice(index,index+1).map((data)=>{
            console.log(data)
           
            return(
                <>
                <div className='questionArea'>
                <h1  className='the-question'>{data.question}</h1>
                  </div>
               
                
                    {data.ans?.map((ans,i)=>{
                        return(<button className='btns' style={ isSelected && ans.correct ? { backgroundColor: 'green'} : {}} onClick={(e)=> answerPicker(e,ans,i)} >{ans.text}</button>)
                    })}
                </>
            )
        })
      }
      </>: <h1>your score  = {score}</h1>}
      
     
        
        
      </div>
      {isSelected || index == -1 || index >= Quizdata.length ?  <button id='next' onClick={index < 0 ? storeHandler:indexHandler }>{ index < 0  || index >= Quizdata.length ? nextBtn = "Play" : nextBtn = "Next"}</button> : ""
}

    {/* <button onClick={storeHandler}>AddData</button> */}
    </div>
  )
}

export default QuizPage
