import { configureStore } from '@reduxjs/toolkit';
import photosReducer from '../features/photos/photos.slice';
import suggestionReducer from '../features/suggestion/suggestion.slice';
import searchReducer from '../features/search/search.slice';

export default configureStore({
  reducer: {
    photos: photosReducer,
    search: searchReducer,
    suggestion: suggestionReducer,
  },
});
