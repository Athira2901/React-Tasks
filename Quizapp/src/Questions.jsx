import React,{useContext} from "react";
import "./App.css";
import { questionContext } from "./App";

function Questions(props) {
  const {question,setQuestion}=useContext(questionContext)
  return (
    <>
     {question.map((q,key) => (
      
      <form className="bg-[#7fa99b] mt-[40px] w-[95%] md:w-[80%] lg:w-[70%] p-[40px] rounded-[15px]">
        <h2 key={key} className="text-2xl">
          {" "}
          {`${key+ 1}.${q.question}`}
        </h2>
        {console.log(q.incorrect_answers[0])}
        {q.incorrect_answers.map((q1, key1) => (
          <div className="mt-[20px] flex gap-5">
            <input
            className="text-xl cursor-pointer"
              type="radio"
              id={q1[key1]}
              name="options"
              onChange={(e) => {
                props.labelclick(e.target.value, q);
              }}
              value={q1}
              />
            <label htmlFor={q1[key1]}  className="text-xl cursor-pointer">{q1}</label>
          </div>
        ))}
        <div className="mt-[20px] flex gap-5">
          <input
           className="text-xl cursor-pointer"
           type="radio"
           id={q.correct_answer}
           value={q.correct_answer}
           onChange={(e) => {
             props.labelclick(e.target.value, q);
            }}
            name="options"
            />
          <label htmlFor={q.correct_answer}  className="text-xl cursor-pointer">
            {q.correct_answer}
          </label>
        </div>
      </form>
            ))}
            </>

  );
}

export default Questions;
