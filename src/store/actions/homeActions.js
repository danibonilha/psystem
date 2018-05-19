import * as actionsTypes from './actionsTypes';
import axios  from 'axios'

export const fetchStarships = () => (dispatch) => {
	dispatch({ type: actionsTypes.FETCH_DATA});
	axios.get('https://swapi.co/api/starships/')
	.then((response) => {
		dispatch({ type: actionsTypes.RECEIVE_DATA, payload: response.data.results })
	}).catch((error) => {
		dispatch({ type: actionsTypes.FETCH_DATA_FAIL, payload: error });
	})
}