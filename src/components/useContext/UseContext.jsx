import { useState } from 'react';
import Dashboard from './Dashboard';
import { DashboardContext } from './context';

// store data so we all of the components inside of the app is
// can access the state and to avoid chaining long props

const UseContext = () => {
    const [user] = useState({
        isSubscribed: true,
        name: 'You me',
    });
    console.log(user.isSubscribed);

    return (
        <div>
            <DashboardContext.Provider value={user}>
                <Dashboard />
            </DashboardContext.Provider>
        </div>
    );
};

export default UseContext;
