import { useDispatch } from 'react-redux';
import { updateMatch } from '../../store/modules/matches/matchesSlice';
import { updateTeam } from '../../store/modules/teams/teamsSlice';
import { TeamsProps, TeamProps, MatchesProps } from './types';

const Matches = ({ matches, teams, round, active }: TeamsProps) => {
    const dispatch = useDispatch();
    const onChangeScore = (score: string, matchIndex: number, type: string) => {
        const index = round * 2 - 2 + Number(matchIndex);
        const match = {...matches[index]};
        
        if (type === 'home') {
            match.scoreHome = Number(score);
        } else {
            match.scoreAway = Number(score);
        }

        dispatch(updateMatch(match));

        if (match.scoreHome === null || match.scoreAway === null) {
            return;
        }
        
        const cloneMatches = [...matches];
        cloneMatches[index] = match;

        const matchesHome = cloneMatches.filter(item => item.home === match.home || item.away === match.home);
        const home = teams.find(team => team.position === match.home);

        if (home && matches.length > 0) {
            handleScore(home, matchesHome);
        }

        const matchesAway = cloneMatches.filter(item => item.home === match.away || item.away === match.away);
        const away = teams.find(team => team.position === match.away);

        if (away && matchesAway.length > 0) {
            handleScore(away, matchesAway);
        }
    }

    const handleScore = (team: TeamProps, matches: MatchesProps[]) => {
        const clone = {...team};

        clone.draw = 0;
        clone.win = 0;
        clone.loss = 0;

        matches.forEach(match => {
            if (match.scoreHome !== null && match.scoreAway !== null) {
                if (match.scoreHome === match.scoreAway) {
                    clone.draw++;
                }

                if (match.home === team.position) {
                    if ( match.scoreHome > match.scoreAway) {
                        clone.win++;
                    }
    
                    if (match.scoreHome < match.scoreAway) {
                        clone.loss++;
                    }
                }

                if (match.away === team.position) {
                    if ( match.scoreHome < match.scoreAway) {
                        clone.win++;
                    }
    
                    if (match.scoreHome > match.scoreAway) {
                        clone.loss++;
                    }
                }
            }
        });

        clone.points = (clone.win * 3) + clone.draw * 1;
        dispatch(updateTeam(clone));
    }
    return (
        <div className={!active ? 'hidden' : '' }>
            {
                matches.filter(match => match.round === round).map((match, index) => {
                    return (
                        <div className='mb-3' key={index}>
                            <div className='flex'>
                                <div className='flex mr-2 w-40 justify-between'>
                                    <div className='flex'>
                                        <img src={teams.find(team => team.position === match.home)?.flag} alt={match.home} width={30} className='mr-1' />
                                        { teams.find(team => team.position === match.home)?.name } 
                                    </div>
                                    <input type="text" className='w-7 border-2 ml-2 text-center' value={match.scoreHome ?? ''} onChange={e => onChangeScore(e.target.value, index, 'home')} />
                                </div>
                                X 
                                <div className='flex ml-2 w-40'>
                                    <input type="text" className='w-7 border-2 mr-2 text-center' value={match.scoreAway ?? ''} onChange={e => onChangeScore(e.target.value, index, 'away')} />
                                    <img src={teams.find(team => team.position === match.away)?.flag} alt={match.home} width={30} className='mr-1' />
                                    { teams.find(team => team.position === match.away)?.name }
                                </div>
                            </div>   
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Matches;