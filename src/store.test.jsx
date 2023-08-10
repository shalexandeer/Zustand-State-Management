import { render } from '@testing-library/react';
import { useEffect } from 'react';
import { useStore } from './store';

function TestComponent({ selector, effect }) {
    const items = useStore(selector);

    useEffect(() => effect(items), [items]);

    return null;
}

test('should return default value at the start', () => {
    const selector = (store) => store.tasks;
    const effect = vi.fn();
    render(<TestComponent selector={selector} effect={effect} />);
    expect(effect).toHaveBeenCalledWith([]);
});

test('should add an items to the store and rerun the effect', () => {
    const selector = (store) => ({ tasks: store.task, addTask: store.addTask });
    const effect = vi.fn().mockImplementation;
    render(<TestComponent selector={selector} effect={effect} />);
    expect(effect).toHaveBeenCalledWith([]);
});
