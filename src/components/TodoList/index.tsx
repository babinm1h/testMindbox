import React, { FC } from 'react';
import { ITodo } from '../../types/todo.types';
import TodoItem from '../TodoItem';

interface ITodoListProps {
    todos: ITodo[]
    toggleComplete: (todoId: string) => void
}

const TodoList: FC<ITodoListProps> = ({ todos, toggleComplete }) => {

    return (
        <div className='flex flex-col'>
            {todos.length > 0
                ? todos.map(t => <TodoItem todo={t} key={t.id} toggleComplete={toggleComplete} />)
                : <h2 className='text-center text-lg text-gray-400 py-5'>Todos not found...</h2>}
        </div>
    );
};

export default TodoList;