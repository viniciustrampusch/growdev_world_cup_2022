import { useSelector } from 'react-redux';
import { selectorTeams } from '../../store/modules/teams/teamsSlice';
import { selectorMatches } from '../../store/modules/matches/matchesSlice';
import Group from '../../components/Group';

const Home = () => {  
    const teams = useSelector(selectorTeams.selectAll);  
    const matches = useSelector(selectorMatches.selectAll);  
    return (
        <div className='flex flex-col items-center'>
            <div className='bg-green-600 w-full p-1'>
                <h1 className='font-sans text-4xl mb-3 text-white text-center'>World Cup 2022</h1>
            </div>
            <Group 
                title='A' 
                teams={teams.filter(team => team.group === 'A')}
                matches={matches.filter(match => match.group === 'A')} />
            <Group 
                title='B' 
                teams={teams.filter(team => team.group === 'B')}
                matches={matches.filter(match => match.group === 'B')} />
            <Group 
                title='C' 
                teams={teams.filter(team => team.group === 'C')}
                matches={matches.filter(match => match.group === 'C')} />
            <Group 
                title='D' 
                teams={teams.filter(team => team.group === 'D')}
                matches={matches.filter(match => match.group === 'D')} />
            <Group 
                title='E' 
                teams={teams.filter(team => team.group === 'E')}
                matches={matches.filter(match => match.group === 'E')} />
            <Group 
                title='F' 
                teams={teams.filter(team => team.group === 'F')}
                matches={matches.filter(match => match.group === 'F')} />
            <Group 
                title='G' 
                teams={teams.filter(team => team.group === 'G')}
                matches={matches.filter(match => match.group === 'G')} />
            <Group 
                title='H' 
                teams={teams.filter(team => team.group === 'H')}
                matches={matches.filter(match => match.group === 'H')} />
        </div>
    );
};

export default Home;