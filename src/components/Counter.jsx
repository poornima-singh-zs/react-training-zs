import React,{useReducer} from "react";
import "./Counter.css";

const counterReducer =(state,action) => {
    switch(action.type){
        case "increment": return {count:state.count+1};
        case "decrement": return {count:state.count-1};
        case "reset" :  return {count:0};
        default: return {state};
    }
};

const Counter = () =>{
    const [state,dispatch] = useReducer(counterReducer,{count:0});

    const handleClick = (e,type) => {
        dispatch({type});
    }

    return (
        < div className="counter-container">
            <h1>Count: {state.count}</h1>
            <div className="buttons">
                <button onDoubleClick={(e)=>e.stopPropagation()}  onClick={(e)=>handleClick(e,"increment")} className="increment">
                    Increment
                </button>
                <button onDoubleClick={(e)=>e.stopPropagation()} onClick={(e)=>handleClick(e,"decrement")} className="decrement">
                    Decrement
                </button>
                <button onDoubleClick={(e)=>e.stopPropagation()}  onClick={(e)=>handleClick(e,"reset")} className="reset">
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Counter;
