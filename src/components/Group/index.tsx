import { useState } from 'react';
import Table from '../Table';
import Matches from '../Matches';
import { TeamsProps } from './types';

const Group = ({ title, teams, matches }: TeamsProps) => {
    const [roundActive, setRoundActive] = useState(1);
    const onClickChangeRound = (event: React.MouseEvent, round: number) => {
        event.preventDefault();
        setRoundActive(round);
    }
    return (
        <div className='flex border-b-2 mt-3'>
            <div className='mb-3'>
                <h2 className='font-sans text-2xl mb-2'>Group { title }</h2>
                <Table teams={teams} />  
            </div>
            <div className='mb-3 pl-6'>
                <h2 className='font-sans text-2xl mb-2'>Matches</h2>
                <ul className='flex mb-3'>
                    <li className='mr-3'>
                        <a href="./" className={`font-sans decoration-solid text-1xl mb-3 ${roundActive === 1 ? 'underline' : ''}`} onClick={event => onClickChangeRound(event, 1)}>
                            Round 1
                        </a>
                    </li>
                    <li className='mr-3'>
                        <a href="./" className={`font-sans decoration-solid text-1xl mb-3 ${roundActive === 2 ? 'underline' : ''}`} onClick={event => onClickChangeRound(event, 2)}>
                            Round 2
                        </a>
                    </li>
                    <li className='mr-3'>
                        <a href="./" className={`font-sans decoration-solid text-1xl mb-3 ${roundActive === 3 ? 'underline' : ''}`} onClick={event => onClickChangeRound(event, 3)}>
                            Round 3
                        </a>
                    </li>
                </ul>
                <div className='flex'>
                    <Matches teams={teams} matches={matches} round={1} active={roundActive === 1} />
                    <Matches teams={teams} matches={matches} round={2} active={roundActive === 2} />
                    <Matches teams={teams} matches={matches} round={3} active={roundActive === 3} />
                </div>
            </div>
        </div>
    );
};

export default Group;