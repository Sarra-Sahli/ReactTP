import React from 'react';
import useStoreValidation from '../ZustandStores/UseStoreValidation';
const Counter = () => {
const {count, increment, decrement}=useStoreValidation();
return (
<div>
<h1>Count: {count}</h1>
<button
onClick={increment}>Increment</button>
<button
onClick={decrement}>Decrement</button>
</div>
);
};
export default Counter;