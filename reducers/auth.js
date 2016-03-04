import CONSTANTS from '../constants.js';
const { PERMISSION, AUTHENTICATION } = CONSTANTS;

function initState() {
	return {
		isFetching: false,
		isAuthenticated: localStorage.getItem('id_token') ? true : false,
		message: ''
	};
}
// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.
function auth( state, action ) {

	if (typeof state === 'undefined') state = initState();

	switch (action.type) {
		case AUTHENTICATION.REQUEST:
			return Object.assign({}, state, {
				type: AUTHENTICATION.WAITING,
				isFetching: true
			});
		case AUTHENTICATION.RESPONSE:
			if(action.ok) {
				return Object.assign({}, state, {
					type: PERMISSION.GRANTED,
					isFetching: false,
					message: ''
				});
			}
			return Object.assign({}, state, {
				type: PERMISSION.DENIED,
				isFetching: false,
				message: action.message
			});
		default:
			return state;
	}
}

export default auth;

