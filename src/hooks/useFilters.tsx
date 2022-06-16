import { FilterTypes } from "../types/todo.types"


export const useFilters = (changeFilter: (filter: FilterTypes) => void) => {
    const filterAll = () => {
        changeFilter(FilterTypes.all)
    }

    const filterActive = () => {
        changeFilter(FilterTypes.active)
    }

    const filterCompleted = () => {
        changeFilter(FilterTypes.completed)
    }

    return { filterCompleted, filterActive, filterAll }
}