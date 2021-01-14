import React from 'react'
import {NavLink} from 'react-router-dom';

function StartQuize(props){

    function changeDificality (e){
        const eTarget = e.target.value;
        console.log(eTarget)
        props.setState(eTarget)
        return(
            <div></div>
        );
    }
    function chanCategory (e){
        const eTarget = e.target.value;
        console.log(eTarget)
        props.setCategory(eTarget)
        return(
            <div></div>
        );
    }
    return (
        <div>
           <h2>Dificality</h2>
            <select value={props.state} onChange={(e) => changeDificality(e)}>
                <option value="all">all</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">hard</option>
            </select>
            <h3>Category</h3>
            
            <select value={props.category} onChange={(e) =>chanCategory(e)}>
                <option value="all">all</option>
                <option value="10">Enterntiment book</option>
                <option value="11">Enterntiment films</option>
                <option value="12">Enterntiment music</option>
                <option value="14">Enterntiment television</option>
            </select>

            <h3>
                <NavLink  exact to ={'/quiz' }>StartQuize</NavLink>
            </h3>
        </div>
    );
}
export default StartQuize