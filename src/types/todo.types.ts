

export interface ITodo {
    completed: boolean
    text: string
    id: string
}


export enum FilterTypes {
    all = 'all',
    active = 'active',
    completed = 'completed'
}