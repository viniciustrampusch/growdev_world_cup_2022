import { combineReducers } from '@reduxjs/toolkit';
import teams from './teams/teamsSlice';
import matches from './matches/matchesSlice';

export default combineReducers({
    teams,
    matches
});