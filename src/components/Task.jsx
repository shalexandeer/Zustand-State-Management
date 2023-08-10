import classNames from 'classnames';
import './Task.css';
import { useStore } from '../store';

export default function Task({ title }) {
    const task = useStore((store) =>
        store.tasks.find((task) => task.title === title)
    );
    const setDraggedTask = useStore((store) => store.setDraggedTask);
    const deleteTask = useStore((store) => store.deleteTask);

    return (
        <div
            className='task'
            draggable
            onDragStart={() => setDraggedTask(task.title)}
        >
            <div>{title}</div>
            <div className='bottom-wrapper'>
                <div>
                    <button onClick={() => deleteTask(task.title)}>
                        delete
                    </button>
                </div>
                <div className={classNames('status', task.state)}>
                    {task.state}
                </div>
            </div>
        </div>
    );
}
