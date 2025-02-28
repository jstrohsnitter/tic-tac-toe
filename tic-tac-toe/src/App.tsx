/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef, useEffect } from 'react'

import './App.css'

function App() {

//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.



/*-------------------------------- Constants --------------------------------*/

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]


/*---------------------------- Variables (state) ----------------------------*/

const [board, setBoard] = useState<string[]>(['', '', '', '', '', '', '', '', ''])

const [turn, setTurn] = useState<string>('X')

const [winner, setWinner] = useState<boolean>(false)

const [tie, setTie] = useState<boolean>(false)

const [turnCounter, setTurnCounter] = useState<number>(1)

/*------------------------ Cached Element References ------------------------*/

const messageEl = useRef<HTMLDivElement | null>(null)
const squareEls = useRef<HTMLDivElement | null>(null)

// /*-------------------------------- Functions --------------------------------*/

// useEffect(() => {

const handleClick = (event: any): void => {
  setTurnCounter((prev) => prev + 1);

  setTurnCounter((prev) => {
    if (prev % 2 === 0) {
      setTurn('O');
    } else {
      setTurn('X');
    }
    return prev;
  });

  console.log(turnCounter);

  if (event.target.textContent === 'X' || event.target.textContent === 'O') {
    return 
  } else if (winner === true) {
    return
  }
  if (turn === 'X') {
    console.log(event.target)
    console.log(turn)
    event.target.textContent = 'X';
  }
  if (turn === 'O') {
    console.log(turn)
    event.target.textContent = 'O'
  }
  //set the index of board to equal the text content of the div with id
  const index = Number(event.target.id)
  console.log(index)
  function updateBoard(index: number) {
    const newBoard = board.map((banana, i) => {
      if (i === index) {
        return banana = turn
      } else {
        return banana
      }
    });
    setBoard(newBoard)
    console.log(newBoard)
    declareWinner(newBoard)
  }
  
  updateBoard(index)
  
  console.log(winner)
  console.log(board)

};

const declareWinner = (newBoard: string[]) => {
  if (newBoard[0] != '' && newBoard[0] === newBoard[1] && newBoard[0] === newBoard[2]) {
    setWinner(true)
    return console.log(winner)
  } 
}
// }, [board, winner, turn, turnCounter])



// const square: HTMLCollection = document.getElementsByClassName('sqr') //this is an html collection, it is an array
// const squareArray = Array.from(square)


//if id 0 doesnt equal '', and id 0 = id 1, and id 0 = id 2, player wins
//if getElementById(0).textContent != 0 && getElementById('0') === getElementById('1') && getElementById('0') === getElementById('2') {
// 'player ${getElementById('0').textContentWins}'}
// const playerWin = () => {
//   if ()
// }

useEffect(() => {
const newUpdatedMessage = () => {
  if (turnCounter === 1 && messageEl.current) {
    messageEl.current.textContent = "New Game! Player X's Turn!"
  } else if (turn === 'X' && turnCounter != 0 && messageEl.current) {
    messageEl.current.textContent = "Player X's Turn!"
  } else if (turn === "O" && messageEl.current) {
    messageEl.current.textContent = "Player O's Turn!"
  } else if (winner === true) {
    messageEl.current.textContent = `Player ${turn} wins!`
  }
}

newUpdatedMessage()


}, [messageEl, turnCounter, turn])


/*----------------------------- Event Listeners -----------------------------*/


  return (
    <>
      <div className='game'>
        <h1 className='title'>Tic-Tac-Toe</h1>
        <h2 className='message' ref={messageEl}>Message</h2>

        <section className="board">
        <div className="sqr" id="0" ref={squareEls} onClick={() => handleClick(event)}></div>
        <div className="sqr" id="1" ref={squareEls} onClick={() => handleClick(event)}></div>
        <div className="sqr" id="2" ref={squareEls} onClick={() => handleClick(event)}></div>
        <div className="sqr" id="3" ref={squareEls} onClick={() => handleClick(event)}></div>
        <div className="sqr" id="4" ref={squareEls} onClick={() => handleClick(event)}></div>
        <div className="sqr" id="5" ref={squareEls} onClick={() => handleClick(event)}></div>
        <div className="sqr" id="6" ref={squareEls} onClick={() => handleClick(event)}></div>
        <div className="sqr" id="7" ref={squareEls} onClick={() => handleClick(event)}></div>
        <div className="sqr" id="8" ref={squareEls} onClick={() => handleClick(event)}></div>
        </section>
      </div>

    </>
  )
}

export default App


///ref={squareEls}
// ref={squareEls}
// ref={squareEls}
// ref={squareEls}
// ref={squareEls}
// ref={squareEls}
// ref={squareEls}
// ref={squareEls}
// ref={squareEls}
// 

// useEffect(() => {
//   const square: HTMLCollection = document.getElementsByClassName('sqr') //this is an html collection, it is an array
//   const squareArray = Array.from(square)
  // const message: HTMLDivElement = messageEl.current
  
//   // function updatedBoard () {
//   //   board.forEach((banana, index) => {
//   //     // console.log(banana)
//   //     // console.log(index);
//   //   //id of square = element.indexOf (0,1,2...)
//   //     if (squareArray[index].id === '0' || squareArray[index].id ===  '2') {
//   //       squareArray[index].textContent ='X'
//   //     }
//   //     else {
//   //       squareArray[index].textContent = 'O'
//   //     }
      
//   //     // console.log(squareArray[index].id)
//   //   //if id of square = 0 or even textcontent = 'X'
//   //     // if (square[index] === )
//   //   //if id of square = odd textcontent = 'O'
//   // })
//   // console.log(board)
//   // }

//   function updateMessage () {
//     if (winner || tie === false) {
//       message1.textContent = turn
//     } else if ( winner === false && tie === true) {
//       message1.textContent = "Cat's Game"
//     } else {
//       message1.textContent = `${turn} wins!`
//     }
//   }

//   function init () {
    
//     // squareEls.current = square[1]
//     // squareEls.current.textContent = 'x'
//     squareArray.forEach((element: Element) => {
//       console.log(element)
//       element.textContent = ''
//       // const number = element.indexOf
//       // squareEls.current= square[element]
//       // squareEls.current.textContent = 'x'
//     })
//     // if (square) {
//     //   //for each element in square make the text content x
//     //   console.log('Element:', square)
//     //   square.textContent = 'x';
//     // }
    
    // if (message) {
    //   console.log('Element:', message)
    //   message.textContent = 'New Game'
    // }
//     function render () {
//       // updatedBoard()
//       updateMessage()
//     }
//     render()
//   }
//   init ()
// }, [board, tie, turn, winner])

// // const placePiece = (board, index, turn) => {
// //   setBoard[index]([turn])
// //   console.log(board)
// // }

// //placePiece sets the state of board to be value turn at a given index
// //needs to make a copy of board, and then change the value at a given index



// const checkForWinner = () => {

// }

// // const placePiece = (board, index, turn) => {
// //   setBoard(...board.map((item, i) => {
// //     return i === index ? turn : item;
// //   }))
// // }

// // const handlePlacePiece = (index, turn) => {
// //   setBoard(...board => ({
// //     ...board: placePiece(...board, index, turn)
// //   }))
// //   console.log(board)
// // }

// const handleClick = (event: any): any => {
//   turnCounter = turnCounter + 1
//   if (turnCounter % 2 !== 0) {
//     setTurn('X');
//   } else if (turnCounter % 2 === 0) {
//     setTurn('O');
//   }
//   console.log(turnCounter)
  
//   console.log(event.target.id)
//   if (event.target.textContent === 'X' || event.target.textContent === 'O') {
//     return 
//   } else if (winner === true) {
//     return
//   }
//   if (turn === 'X') {
//     console.log(event.target)
//     console.log(turn)
//     event.target.textContent = 'X';
//   }
//   if (turn === 'O') {
//     console.log(turn)
//     event.target.textContent = 'O'
//   }
// }

  // setBoard((prev) => prev.map((item, i) => {
  //   const index = event.target.id
  //   console.log(index)
  //   return i === index ? turn : item
  // }))
  // console.log(board)

  // setBoard((prev) => prev.map((item, i) => {
  //   const index = event.target.id
  //   return i === index ? turn : item;
  // }))
  // console.log(board)

  // const placePiece = (index: any, turn: string, ...board: string[]) => {
//   setBoard(board.map((item, i) => {
//         return i === index ? turn : item;
//       }))
//         console.log(board)
// }

// const squareEls = useRef<any>(null) //useRef is used when a you want a component to 'remember some information, but you don't want that information to trigger new renders
// //squareEls = getElementByClass to access all the square elements