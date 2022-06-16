import '@testing-library/jest-dom'
import { render, fireEvent, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'


describe('app tests', () => {
    test('form should render', async () => {
        render(<App />)
        const form = screen.getByTestId('form')
        expect(form).toBeInTheDocument()
    })


    test('create todo', async () => {
        render(<App />)
        const form = screen.getByTestId('form')
        const input = screen.getByTestId('input')
        expect(input).toBeInTheDocument()
        expect(form).toBeInTheDocument()

        userEvent.type(input, 'react todo')
        fireEvent.submit(form)
        const todo = screen.getByText(/react todo/i)
        expect(todo).toBeInTheDocument()
    })


    test('complete todo', async () => {
        render(<App />)
        const form = screen.getByTestId('form')
        const input = screen.getByTestId('input')
        expect(input).toBeInTheDocument()
        expect(form).toBeInTheDocument()

        userEvent.type(input, 'react todo')
        fireEvent.submit(form)
        const todo = screen.getByText(/react todo/i)
        userEvent.click(todo)
        expect(todo).toHaveClass('testClass', { exact: false })
    })

    
})

