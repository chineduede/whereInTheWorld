
const reducer = (state='', action) => {
	switch(action.type) {
		case 'FILTER':
			return action.str
		default:
			return ''
	}
}

export const filterList = (str) => {
	return {
		type: 'FILTER',
		str
	}
}

export default reducer