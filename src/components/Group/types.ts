export type TeamsProps = {
    title: string;
    teams: TeamProps[];
    matches: MatchesProps[];
};

type TeamProps = {
    name: string;
    flag: string;
    group: string;
    position: string;
    win: number;
    draw: number;
    loss: number;
    points: number;
}

type MatchesProps = {
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