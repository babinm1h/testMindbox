import React from 'react';
import { useTodos } from '../../hooks/useTodos';
import TodoFilters from '../TodoFilters/TodoFilters';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';

const MainBlock = () => {

    const { createTodo, todos, toggleComplete, filteredTodos, changeFilter, removeCompleted, filter } = useTodos()


    return (
        <div className="flex items-center justify-center w-full h-screen flex-col gap-5">
            <h1 className="font-semibold text-3xl">My Todos</h1>
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 w-[600px]">
                <TodoForm createTodo={createTodo} />
                <TodoList todos={filteredTodos} toggleComplete={toggleComplete} />
                <TodoFilters todos={todos} changeFilter={changeFilter}
                    removeCompleted={removeCompleted} activeFilter={filter} />
            </div>
        </div>
    );
};

export default MainBlock;