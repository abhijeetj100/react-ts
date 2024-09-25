import { useState } from "react"
import Square from "../Square"
import { Button } from "antd"

export default function Board() {
    const [currentMove, setCurrentMove] = useState(0)

    const IsXNext = currentMove % 2 === 0

    const [history, setHistory] = useState<Array<Array<String | null>>>([
        Array(9).fill(null),
    ])

    const currentState = history[currentMove]

    const calculateWinner = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]

        for (let i = 0; i < lines.length; i++) {
            console.log("called")
            const [a, b, c] = lines[i]

            if (
                currentState[a] &&
                currentState[a] === currentState[b] &&
                currentState[a] === currentState[c]
            ) {
                return currentState[a]
            }
        }
        return null
    }

    const handleClick = (i: number) => {
        const squaresCopy = currentState.slice()
        if (squaresCopy[i] || calculateWinner()) {
            return
        }
        squaresCopy[i] = IsXNext ? "X" : "O"
        const currentHistory = history.slice(0, currentMove + 1)
        currentHistory.push(squaresCopy)
        setHistory(currentHistory)
        setCurrentMove(currentMove + 1)
    }

    const status = () => {
        const winner = calculateWinner()
        if (winner) {
            return `Winner is ${winner}`
        }
    }

    const jumpTo = (step: number) => {
        setCurrentMove(step)
    }

    const moves = history.map((squares, move) => {
        const desc = move ? "Go to move #" + move : "Go to game start"
        return (
            <li key={move}>
                <Button onClick={() => jumpTo(move)}>{desc}</Button>
            </li>
        )
    })

    return (
        <>
            <div className="board-row">
                <Square
                    value={currentState[0]}
                    OnSquareClicked={() => handleClick(0)}
                />
                <Square
                    value={currentState[1]}
                    OnSquareClicked={() => handleClick(1)}
                />
                <Square
                    value={currentState[2]}
                    OnSquareClicked={() => handleClick(2)}
                />
            </div>
            <div className="board-row">
                <Square
                    value={currentState[3]}
                    OnSquareClicked={() => handleClick(3)}
                />
                <Square
                    value={currentState[4]}
                    OnSquareClicked={() => handleClick(4)}
                />
                <Square
                    value={currentState[5]}
                    OnSquareClicked={() => handleClick(5)}
                />
            </div>
            <div className="board-row">
                <Square
                    value={currentState[6]}
                    OnSquareClicked={() => handleClick(6)}
                />
                <Square
                    value={currentState[7]}
                    OnSquareClicked={() => handleClick(7)}
                />
                <Square
                    value={currentState[8]}
                    OnSquareClicked={() => handleClick(8)}
                />
            </div>
            <div>{status()}</div>
            <h3>Game Moves:</h3>
            <ol>{moves}</ol>
        </>
    )
}
