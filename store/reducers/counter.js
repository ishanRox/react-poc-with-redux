import { DECREMENT, INCREMENT } from "../actions/counter";


const initialState = {
    count: 10,
    otherVal:''
};


const countReducer = (state = initialState, action) => {
    console.log('action', state, action);

    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };

    }

    return state;
}
export default countReducer;