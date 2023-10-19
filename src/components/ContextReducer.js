import React, { createContext } from "react";
import { useContext,useReducer } from "react";

export const CartStateContext= createContext();
export const CartDispatchContext= createContext();

function reducer(state,action){
    switch(action.type){
        case "ADD":
            return [...state,{_id: action._id, title: action.title, qty: action.qty, size: action.size, price: action.price}];
            default:
                return state;
        case "REMOVE":
            let newArray=[...state];
            newArray.splice(action.index,1);
             return newArray;
        case "UPDATE":
            let indexUpdate= state.findIndex(item => item._id==action._id && item.size==action.size);
            let updateArray= state;

            var newQty= parseInt(action.qty)+ parseInt(state[indexUpdate].qty);
            var newPrice= newQty* parseInt(action.unitPrice);
            console.log(action.qty+" "+ state[indexUpdate].qty+" "+newQty);
             updateArray[indexUpdate]= {...state[indexUpdate],qty: newQty, price: newPrice};

             console.log(updateArray);
             return updateArray;

        case "DROP":
            let empArray=[];
            return empArray;

    }
}

export default function ContextReducer({children}) {

    const [state, dispatch] = useReducer(reducer, []);

    return <CartStateContext.Provider value={state}>
        <CartDispatchContext.Provider value={dispatch}>
            {children}
        </CartDispatchContext.Provider>
    </CartStateContext.Provider>;
}
