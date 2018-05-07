const initialState = { 
    currentValue: 0,
    futureValue: [],
    previousValue: []
};

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const UNDO = "UNDO";
const REDO = "REDO";

export default function reducer( state = initialState, action){
    switch( action.type){
        case INCREMENT:
        return { currentValue: state.currentValue + action.amount };
        case DECREMENT:
        return { currentValue: state.currentValue - action.amount };
        case UNDO:
        return {};
        case REDO:
        return {}
        default:
        return state;
    }
    
}

export function increment( amount){
    return { amount, type: INCREMENT}
}
export function decrement(amount){
    return { amount, type: DECREMENT}
}