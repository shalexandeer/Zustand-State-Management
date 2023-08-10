import { useMemo, useState } from 'react';
import { initialItems } from './utils';

const Demo = () => {
    const [count, setCount] = useState(0);
    const [items] = useState(initialItems);

    const selectedItems = useMemo(
        () => items.find((item) => item.id === count),
        [items, count ]
    );

    return (
        <div className='tutorial'>
            <h1>Count : {count}</h1>
            <h1>selected item: {selectedItems?.id}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default Demo;
