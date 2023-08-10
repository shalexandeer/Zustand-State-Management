import { useState } from 'react';
import { useStore } from '../store';
import './Column.css';
import Task from './Task';
import { shallow } from 'zustand/shallow';
import classNames from 'classnames';

export default function Column({ state }) {
    const [text, setText] = useState('');
    const [open, setOpen] = useState(false);
    const [drop, setDrop] = useState(false);

    const tasks = useStore(
        (store) => store.tasks.filter((task) => task.state === state),
        shallow
    );
    const addTask = useStore((store) => store.addTask);
    const setDraggedTask = useStore((store) => store.setDraggedTask);
    const draggedTask = useStore((store) => store.draggedTask);
    const movedTask = useStore((store) => store.movedTask);

    return (
        <div
            className={classNames('column', { drop: drop })}
            onDragOver={(e) => {
                setDrop(true);
                e.preventDefault();
            }}
            onDragLeave={(e) => {
                setDrop(false);
                e.preventDefault();
            }}
            onDrop={(e) => {
                setDrop(false);
                movedTask(draggedTask, state);
                setDraggedTask(null);
            }}
        >
            <div className='title-wrapper'>
                <p>{state}</p>
                <button
                    onClick={() => {
                        setOpen(true);
                    }}
                >
                    Add
                </button>
            </div>
            {tasks.map((task) => {
                return <Task title={task.title} key={task.title} />;
            })}
            {open && (
                <div className='Modal'>
                    <div className='modal-content'>
                        <input
                            onChange={(e) => setText(e.target.value)}
                            value={text}
                        />
                        <button
                            onClick={() => {
                                addTask(text, state);
                                setText('');
                                setOpen(false);
                            }}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

// (prev, next) => {
//     const longest =
//         prev.length > next.length ? prev.length : next.length;
//     for (let i = 0; i < longest; i++) {
//         if (!prev[i] || !next[i]) return false;
//         if (prev[i] !== next[i]) return false;
//     }
//     return true;
// }

// const filtered = useMemo(
//     () => tasks.filter((task) => task.state === state),
//     [tasks, state]
// );
