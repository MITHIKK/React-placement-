import React from 'react'

const initialValue = {count:0};

const reducerFunction = (state,action)=>{
    switch(action.type){
        case 'increment':
            return {count:state.count + 1};
        case 'decrement':
            return {count:state.count - 1};
        case 'reset':
            return initialValue;
        default:
            state.count=0;
    }

}
const Reducer = () => {
    const [state,dispatch] = useReducer(reducerFunction,initialValue)
  return (
    <div>
        <h1>{state.count} </h1>
        <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
        <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
        <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}

export default Reducer