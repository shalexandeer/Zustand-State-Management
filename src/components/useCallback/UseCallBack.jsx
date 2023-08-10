import { useCallback, useState } from 'react';
import Search from './Search';

const allUsers = ['john', 'Alex', 'george', 'simon', 'james'];

const UseCallBack = () => {
    const [users, setUsers] = useState(allUsers);
    const [count, setCount] = useState(0);

    const handleSearch = useCallback(
        (text) => {
            console.log(users[0]);
            const filteredUsers = allUsers.filter((user) =>
                user.toLowerCase().includes(text)
            );
            setUsers(filteredUsers);
        },
        [users]
    );

    const handleCount = () => {
        console.log('count rendered');
        setCount(count + 1);
    };
    return (
        <div className='tutorial'>
            <div className='align-center mb-2 flex'>
                <button onClick={() => setUsers(shuffle(allUsers))}>
                    Shuffle
                </button>
                <button onClick={handleCount}>count</button>
                <p>{count}</p>
            </div>
            <Search onChange={handleSearch} />
            <ul>
                {users.map((user) => {
                    return <li key={user}>{user}</li>;
                })}
            </ul>
        </div>
    );
};

export default UseCallBack;
