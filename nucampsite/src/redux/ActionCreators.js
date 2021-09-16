import * as ActionTypes from './ActionTypes';
import CampsiteInfo from '../components/CampsiteInfoComponent';

export const addComment = (camspiteId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        camspiteId: camspiteId,
        rating: rating,
        author: author,
        text: text
    }
});