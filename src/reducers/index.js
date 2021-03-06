import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts'
import {reducer as formReducer} from 'reducer_posts'

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
