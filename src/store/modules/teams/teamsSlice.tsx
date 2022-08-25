import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import data from '../../../data/teams';

export type Team = {
    name: string;
    flag: string;
    group: string;
    position: string;
    win: number;
    draw: number;
    loss: number;
    points: number;
}

const adapter = createEntityAdapter<Team>({
    selectId: (team) => team.flag
});

const initialState = adapter.addMany(
    adapter.getInitialState(),
    data
);

const slice = createSlice({
    name: 'teams',
    initialState,
    reducers: {
        updateTeam: adapter.setOne,
    }
});

export default slice.reducer;
export const selectorTeams = adapter.getSelectors((state: any) => state.teams);
export const { updateTeam } = slice.actions;