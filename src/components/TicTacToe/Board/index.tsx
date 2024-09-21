import { useState } from "react";
import Square from "../Square";

export default function Board(){
    const [squares, setSquares] = useState<Array<String | null>>(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const calculateWinner = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        
        for(let i = 0; i<lines.length; i++){
            console.log("called");
            const [a, b, c] = lines[i];

            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
                return squares[a];
            }

        }
        return null;

    }

    const handleClick = (i: number) => {
        const squaresCopy = squares.slice();
        if(squaresCopy[i] || calculateWinner()){
            return;
        }
        squaresCopy[i] = isXNext ? 'X' : 'O';
        setSquares(squaresCopy);
        setIsXNext(!isXNext);
    }

    const status = () => {
        const winner = calculateWinner();
        if(winner){
            return `Winner is ${winner}`;
        }
    }

    return (
        <>
            <div className='board-row'>
                <Square value={squares[0]} OnSquareClicked={() => handleClick(0)} />
                <Square value={squares[1]} OnSquareClicked={() => handleClick(1)} />
                <Square value={squares[2]} OnSquareClicked={() => handleClick(2)} />
            </div>
            <div className='board-row'>
                <Square value={squares[3]} OnSquareClicked={() => handleClick(3)} />
                <Square value={squares[4]} OnSquareClicked={() => handleClick(4)} />
                <Square value={squares[5]} OnSquareClicked={() => handleClick(5)} />
            </div>
            <div className='board-row'>
                <Square value={squares[6]} OnSquareClicked={() => handleClick(6)} />
                <Square value={squares[7]} OnSquareClicked={() => handleClick(7)} />
                <Square value={squares[8]} OnSquareClicked={() => handleClick(8)} />
            </div>
        <div>{status()}</div>
        </>
    )
}