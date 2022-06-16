import React, { FC } from 'react';
import { CheckIcon } from '../../assets/icons';
import { ITodo } from '../../types/todo.types';

interface ITodoItemProps {
    todo: ITodo
    toggleComplete: (todoId: string) => void
}

const TodoItem: FC<ITodoItemProps> = ({ todo, toggleComplete }) => {

    const onToggleComplete = () => {
        toggleComplete(todo.id)
    }

    return (
        <div className='border-b border-gray-300 p-5 hover:bg-gray-200 transition-colors cursor-pointer'
            onClick={onToggleComplete} data-testid='todo'>
            <div className="flex items-center gap-5">
                <div className='w-7 h-7 border border-gray-300 rounded-[50%] flex items-center justify-center'>
                    {todo.completed && <CheckIcon className='text-green-600 w-5 h-5' />}
                </div>
                <p className={todo.completed ? 'testClass text-gray-400 line-through' : ""}>{todo.text}</p>
            </div>
        </div>
    );
};

export default TodoItem;