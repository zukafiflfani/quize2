import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../../Questens.css"
const Questen = (props) => {
  console.log("result", props);
  //  let variants = props.results[0].incorrect_answers.map((quest, i) => <li key={i}> {quest}</li>;
  let questen =null;
  let options =null;
  let corenctAnswer =null;
  let history = useHistory();
  // const [bgColor,setbgColor] =React.useState('');
  //  const [indx,setIndx] =useState(0);.map((quest, i) => <p key={i}> {quest}</p>)    .map((quest, i) => <p key={i}> {quest}</p>)


  let allAnswer =[]
  if(props.results.length > 0){
    questen = props.results[props.indx].question;
    options = props.results[props.indx].incorrect_answers
    corenctAnswer = props.results[props.indx].correct_answer
    // options.push(corenctAnswer);
    allAnswer =[...options,corenctAnswer]
  }
 
  // let opL = null;
  // opL =options.length;
  // while(opL >1){
  //   allAnswer.push(options[3])
  //   opL--;
  // }


  function shuffle(allAnswer) {
    allAnswer.sort(() => Math.random() - 0.5);
  }
  
  shuffle(allAnswer);

  if(props.indx >=10){
    history.push("/quiz/finish")
  }
  const onChangeHandler =(e)=>{
    // if(bgColor==="blue"){
    //   setbgColor("red");
    // }else{
    //   setbgColor("blue");
    // }console.log(bgColor)
    const target = e.target.value 
    
    console.log(target)
    if(target=== corenctAnswer){
      props.setScore((pre) => pre+1)
    }
    props.setIndx((prevInex)=>prevInex+1)
  }
  // `${bgColor}`? "blue" : "red"

  return (
    <div className="App">
        {/* <h4> {props.question}</h4>
        {variants}
        <button>{props.incorrect_answers[0]}</button> */}
      <h3 id="questen">{questen}</h3>
      {/* {options} 
      <p>{corenctAnswer} </p>  style ={{backgroundColor:`${bgColor}`}}*/}
      {allAnswer.map((answer,i)=> <button key={i} className="options" onClick={(e)=>onChangeHandler(e)} value={answer}> {answer}</button>)}
      {/* <button onClick={()=> props.setIndx((prevInex)=>prevInex+1)}> button </button> */}
    </div>
  );
  
};

export default Questen;
