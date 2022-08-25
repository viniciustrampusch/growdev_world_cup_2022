import { TableProps } from './types';

const Table = ({ teams }: TableProps) => {
    return (
        <table className='w-80 border-collapse border border-slate-400'>
            <thead>
                <tr>
                    <td className='border border-slate-300 pl-2'>Team</td>
                    <td className='border border-slate-300 pl-2 pr-2 text-center'>P</td>
                    <td className='border border-slate-300 pl-2 pr-2 text-center'>W</td>
                    <td className='border border-slate-300 pl-2 pr-2 text-center'>D</td>
                    <td className='border border-slate-300 pl-2 pr-2 text-center'>L</td>
                    <td className='border border-slate-300 pl-2 pr-2 text-center'>Pts</td>
                </tr>
            </thead>
            <tbody>
            { 
                teams.sort(function(a, b){return b.points - a.points}).map((team, index) => {
                    return (
                        <tr key={team.flag} className={`${index === 0 || index === 1 ? 'bg-lime-100 ' : ''}`}>
                            <td className='border border-slate-300 pl-2 pr-2'>
                                <div className='flex'>
                                    <img src={team.flag} alt={team.name} width={30} />
                                    <p className='ml-2'>{ team.name }</p>
                                </div>
                            </td>
                            <td className='border border-slate-300 pl-2 pr-2 text-center'>{ team.win + team.draw + team.loss }</td>
                            <td className='border border-slate-300 pl-2 pr-2 text-center'>{ team.win }</td>
                            <td className='border border-slate-300 pl-2 pr-2 text-center'>{ team.draw }</td>
                            <td className='border border-slate-300 pl-2 pr-2 text-center'>{ team.loss }</td>
                            <td className='border border-slate-300 pl-2 pr-2 text-center'>{ team.points }</td>
                        </tr>
                    );
                }) 
            }
            </tbody>
        </table>
    );
};

export default Table;