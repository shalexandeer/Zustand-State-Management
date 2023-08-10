import './App.css';
import Column from './components/Column';
import Demo from './components/UseMemo';
import UseCallBack from './components/useCallback/UseCallBack';
import UseContext from './components/useContext/UseContext';
import { useRef } from 'react';
import UseRef from './components/useRef/UseRef';
import UseReducer from './components/useReducer/UseReducer';

function App() {
    return (
        <div className='App'>
            {/* <Column state='PLANNED' />
            <Column state='ONGOING' />
            <Column state='DONE' /> */}

            {/* learn use memo */}
            {/* <Demo /> */}

            {/* Learn use callback */}
            {/* <UseCallBack /> */}

            {/* learn use context */}
            {/* <UseContext /> */}

            {/* learn useRef */}
            {/* <UseRef /> */}

            {/* Learnm useReducer */}
            <UseReducer />
        </div>
    );
}

export default App;
