import { createStore, combineReducers } from 'redux';
import chatbotReducer from './reducers/chatbot';

const rootReducer = combineReducers({
  chatbot: chatbotReducer,
});

const store = createStore(rootReducer);

export default store;