export const SET_DATA = 'SET_DATA'


let initialState = {
    data: {
        firstName: '',
        middleName: '',
        lastName: '',
        profDesignation: '',
        language1: '',
        language2: '',
        gender: '',
        speciality: '',
        Notes: '',
        status: '',
        disposition: ''
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DATA':
            return { ...state, data: action.payload }
        default:
            return state
    }
}