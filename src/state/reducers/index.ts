import { combineReducers } from 'redux';
import cellsReducer from './cellsReducer';
import bundlesReducers from './bundlesReducer'

const reducers = combineReducers({
  cells: cellsReducer,
  bundles: bundlesReducers,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
