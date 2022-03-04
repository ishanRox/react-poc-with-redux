export const INCREMENT = 'incrementAmount';
export const DECREMENT = 'decrementAmount';

export const increaseCount = () => {
    return { type: INCREMENT };
};


export const decreaseCount = () => {
    return { type: DECREMENT };
};
