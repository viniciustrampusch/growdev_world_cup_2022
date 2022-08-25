import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import data from '../../../data/matches';

export type Match = {
    id: number;
    home: string;
    away: string;
    date: string;
    time: string;
    round: number;
    group: string;
    scoreHome: null | number;
    scoreAway: null | number;
}

const adapter = createEntityAdapter<Match>({
    selectId: (match) => match.id
});

const initialState = adapter.addMany(
    adapter.getInitialState(),
    data
);

const slice = createSlice({
    name: 'matches',
    initialState,
    reducers: {
        updateMatch: adapter.setOne,
    }
});

export default slice.reducer;
export const selectorMatches = adapter.getSelectors((state: any) => state.matches);
export const { updateMatch } = slice.actions;