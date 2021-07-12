import getAll from '../services/service'

const reducer = (state=[], action) => {
	
	switch(action.type) {
		case 'INIT_COUNTRIES':
			return action.data
		default:
			return state
	}
}

export const initCountries = () => {
	return async dispatch => {
		const countries = await getAll()
		dispatch({
			type: 'INIT_COUNTRIES',
			data: countries
		})
	}
}

export default reducer