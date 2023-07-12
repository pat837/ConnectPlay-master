import { createStore, applyMiddleware  , combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { alertsReducer } from './reducers/alertsReducer';
import { gamesReducer } from './reducers/gamesReducer';
import { bookingsReducer } from './reducers/bookingsReducer';

import { alertsReducer1 } from './reducers/alertsReducer';
import { gamesReducer1} from './reducers/gamesReducer';
import { bookingsReducer1 } from './reducers/bookingsReducer';

const composeEnhancers = composeWithDevTools({});

const rootReducer = combineReducers({
   gamesReducer,
   alertsReducer,
   bookingsReducer,
   gamesReducer1,
   alertsReducer1,
   bookingsReducer1,
})

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
   
  )
);

export default store