import { useEffect, useState } from "react"
import { FilterTypes, ITodo } from "../types/todo.types"


export const useTodos = () => {
    const [todos, setTodos] = useState<ITodo[]>([])
    const [filter, setFilter] = useState<FilterTypes>(FilterTypes.all)
    const [filteredTodos, setFilteredTodos] = useState<ITodo[]>([])

    const createTodo = (todo: ITodo) => {
        setTodos([todo, ...todos])
    }

    const toggleComplete = (todoId: string) => {
        const updated = todos.map(t => {
            if (t.id === todoId) return { ...t, completed: !t.completed };
            return t;
        })
        setTodos(updated)
    }


    const changeFilter = (filter: FilterTypes) => {
        setFilter(filter)
    }

    useEffect(() => {
        if (filter === FilterTypes.all) {
            setFilteredTodos(todos)
        }
        if (filter === FilterTypes.active) {
            setFilteredTodos(todos.filter(t => t.completed === false))
        }
        if (filter === FilterTypes.completed) {
            setFilteredTodos(todos.filter(t => t.completed === true))
        }

    }, [filter, todos])


    const removeCompleted = () => {
        setTodos(prev => prev.filter(t => t.completed === false))
    }

    return { createTodo, toggleComplete, todos, changeFilter, filteredTodos, removeCompleted, filter }
}

