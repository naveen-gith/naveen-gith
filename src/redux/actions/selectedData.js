import {SET_DATA} from '../reducers/selectedData'

export const setSelectedData = (data) => {
    return {
        type: SET_DATA,
        payload: data
    }
}