import { createStore, combineReducers } from 'redux';
import { Campsites } from './campsites';
import { Comments } from './comments';
import { Partners } from './partner';
import { Promotions } from './promotions';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            campsites: Campsites,
            comments: Comments,
            partners: Partners,
            promotions: Promotions
        })
    );

    return store;
};