import React from 'react';

function Result(props) {
    const finishTime =new Date()
    return (
        <div>
            <h2>Your score : {props.score}</h2>
            <h2>Time Spent : {finishTime.getMinutes()-props.startTime.getMinutes()} .{finishTime.getSeconds()-props.startTime.getSeconds()} seconds </h2>
        </div>
    );
}

export default Result;