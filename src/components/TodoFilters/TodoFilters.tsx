import React, { FC } from 'react';
import { useFilters } from '../../hooks/useFilters';
import { FilterTypes, ITodo } from '../../types/todo.types';


interface ITodoFiltersProps {
    todos: ITodo[]
    changeFilter: (filter: FilterTypes) => void
    removeCompleted: () => void
    activeFilter: FilterTypes
}


const TodoFilters: FC<ITodoFiltersProps> = ({ todos, changeFilter, removeCompleted, activeFilter }) => {
    const activeCount = todos.filter(t => t.completed === false).length;

    const { filterActive, filterAll, filterCompleted } = useFilters(changeFilter)

    return (
        <div className="py-3 px-5 bg-gray-100 flex items-center justify-between text-gray-400">
            <span className="">{activeCount} Items Left</span>

            <div className="flex items-center gap-5">
                <button className={`btn ${activeFilter === FilterTypes.all && 'border-red-300'}`}
                    onClick={filterAll}>All</button>
                <button className={`btn ${activeFilter === FilterTypes.active && 'border-red-300'}`}
                    onClick={filterActive}>Active</button>
                <button className={`btn ${activeFilter === FilterTypes.completed && 'border-red-300'}`}
                    onClick={filterCompleted}>Completed</button>
            </div>

            <button onClick={removeCompleted}>
                Clear Completed
            </button>
        </div>
    );
};

export default TodoFilters;