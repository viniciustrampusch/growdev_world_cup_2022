export type TeamsProps = {
    round: number;
    matches: MatchesProps[];
    teams: TeamProps[];
    active: boolean;
};

export type TeamProps = {
    name: string;
    flag: string;
    group: string;
    position: string;
    win: number;
    draw: number;
    loss: number;
    points: number;
}

export type MatchesProps = {
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