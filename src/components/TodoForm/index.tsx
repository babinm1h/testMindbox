import React, { FC, useState } from 'react';
import { SendIcon } from '../../assets/icons';
import { ITodo } from '../../types/todo.types';
import { nanoid } from "nanoid"


interface ITodoFormProps {
    createTodo: (todo: ITodo) => void
}

const TodoForm: FC<ITodoFormProps> = ({ createTodo }) => {
    const [text, setText] = useState<string>('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }


    const handleCreate = (e: React.FormEvent) => {
        e.preventDefault()
        if (text.length === 0) return;
        createTodo({ completed: false, id: nanoid(), text: text })
        setText('')
    }

    return (
        <form action="" className="flex items-center border-b border-gray-300 px-5" onSubmit={handleCreate}
            data-testid='form'>
            <input type="text" className="w-full placeholder:italic py-5" data-testid='input'
                placeholder='What needs to be done?' value={text} onChange={handleChange} />
            <button type="submit" data-testid='submitBtn'
                className='cursor-pointer text-gray-300 rotate-90 hover:text-gray-400 transition-colors disabled:bg-gray-100'>
                <SendIcon className='w-7 h-7 ' />
            </button>
        </form>
    );
};

export default TodoForm;