export type TableProps = {
    teams: TeamProps[];
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