import React, { useEffect } from "react";
import axios from "axios";
import Questen from "./Questen";

 function DataFetch(props) {
  //   const [list, setList] = React.useState([]);
  // "https://opentdb.com/api.php?amount=10&category=10&difficulty=easy"
  const [questens, setQuestenst] = React.useState([]);
  let http = `https://opentdb.com/api.php?amount=11&category=${props.category}&difficulty=${props.dificality}`;
  if(props.category === 'all' && props.dificality ==='all'){
    http =`https://opentdb.com/api.php?amount=11`
  }else if(props.category !== 'all' && props.dificality ==='all'){
    http = `https://opentdb.com/api.php?amount=11&category=${props.category}`
  }else if(props.category === 'all' && props.dificality !=='all'){
    http = `https://opentdb.com/api.php?amount=11&difficulty=${props.dificality}`
  }

  useEffect(() => {
      axios
        .get(http)
        .then((response) => {
          setQuestenst( response.data.results);
        })
        .catch((error) => {
          console.log(error.message, error.response);
        });
  }, []);
//   let content =null
//   if(questens.length > 0) {
//     content = questens.map((quest, i) => <Questen key={i} question={quest.question} correct_answer={quest.correct_answer} incorrect_answers={quest.incorrect_answers} />);
// }
  
  return  <Questen results={questens} indx={props.indx} setIndx={props.setIndx} setScore={props.setScore}/>;  
}
export default DataFetch;
