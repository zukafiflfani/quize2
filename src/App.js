import './App.css';
import {Route} from 'react-router-dom';
import React,{useState} from 'react';
import StartQuize from './qvizis/startquize/startquize'
import DataFetching from './qvizis/questens/DataFetching'
import Result from './qvizis/result/result'
// {/* <Route exact path ='/' component ={StartQuize}/> */}

let startTime = new Date()
function App() {
  // React.useEffect(()=>{
  //   console.log("monacemebi : " ,time.getSeconds())
  // },[])
  // console.log("monacemebi : " ,startTime.getHours() + ':' + startTime.getMinutes() + ':' + startTime.getSeconds())
  const [dificality, setDificality] = React.useState("all");
  const [category,setCategory] = React.useState(10);
  const [score,setScore] =React.useState(0);
  const [indx,setIndx] =useState(0);
  return (
    <div className="App">
      <Route exact path ='/' render={(props) => <StartQuize {...props} setState={setDificality} state={dificality} category={category} setCategory={setCategory}/>} />
      <Route exact path ='/quiz'  render={(props) => <DataFetching {...props}  category={category} dificality={dificality} indx ={indx} setIndx={setIndx} setScore={setScore} />}/>
      <Route exact path ='/quiz/finish' render={(props) => <Result {...props} score={score} startTime={startTime} />} /> 
    </div>
  );
}

export default App;