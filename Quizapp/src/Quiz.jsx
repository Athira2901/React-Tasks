import React, { useEffect,useContext } from 'react'
 import axios from "axios"
 import { useState } from 'react'
import Questions from './Questions'
import './App.css';
import { questionContext } from './App';
function Quiz() {
    // const [question, setQuestion] = useState([])
    const {question,setQuestion}=useContext(questionContext)
    const [score,setScore] = useState(0)
    const [mark, setMark] = useState(false)
    useEffect(()=>{
        axios.get("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple")
     
        .then((response)=>{
            setQuestion(response.data.results)
        })
    },[])
    function labelclick(val,obj){
      
        if(val==obj.correct_answer){
            setScore(score+1)
            // console.log(score)
            // console.log("correct")
        }
       
    }
    function handlesubmit(){
        setMark(true)
        window.scroll({
            top: 0,
            left: 100,
            behavior: "smooth",
          });
          
    }
  return (
    <div className='flex flex-col'>
         <h1 className='text-5xl  text-center  bg-[#394a51] h-[90px] flex items-center justify-center w-screen md:w-full text-white'>Quiz App</h1>
         <div className='flex justify-between   items-center mt-[10px] text-xl'>
        
            <h3>CATEGORY:{question[0]?.category}</h3>
            <div  className='flex justify-end ml-[450px]'>
                
                {mark?
                <div className='flex items-center'>
                <h2>SCORE:</h2>
                <p className='text-3xl'>{score}/10</p>
                </div>
                :""}
            </div>
          
         </div>
        
         
         <div  className='flex flex-col items-center p-[10px] mt-[70px] mx-[20px] md:mx-[70px]'>
            {/* {question.map((q,key) => ( */}
                
                <Questions labelclick={labelclick}/>
            {/* ))} */}
            <button type="submit" onClick={handlesubmit} className='w-[170px] mb-[100px] mt-[30px] p-[15px] rounded-[25px]  text-2xl flex items-center justify-center bg-[#394a51] hover:bg-[#7fa99b]  hover:text-black text-white self-center '>Submit</button>

        </div>
    </div>
  )
}

export default Quiz

  
  
