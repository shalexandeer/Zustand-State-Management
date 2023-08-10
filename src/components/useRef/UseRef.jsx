import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';

const UseRef = () => {
    // const [count, setCount] = useState(0);
    // const countRef = useRef(0);
    // const handleIncrement = () => {
    //     setCount(count + 1);
    //     countRef.current++;
    //     console.log('state ', count);
    //     console.log('ref ', countRef.current);
    // };
    // return (
    //     <div className='tutorial'>
    //         Count: {countRef.current}
    //         <button onClick={handleIncrement}>Increment</button>
    //     </div>
    // );

    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current?.focus();
    }, []); 

    return (
        <div className='tutorial'>
            <input ref={inputRef} type='text' placeholder='type sometuing' />
        </div>
    );
};

export default UseRef;
