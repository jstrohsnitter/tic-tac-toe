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


/*------------------------ Cached Element References ------------------------*/

// const squareEls = useRef<any>(null) //useRef is used when a you want a component to 'remember some information, but you don't want that information to trigger new renders
// //squareEls = getElementByClass to access all the square elements
const messageEl = useRef<any>(null)

// /*-------------------------------- Functions --------------------------------*/

// useEffect(() => {
//   const square: HTMLCollection = document.getElementsByClassName('sqr') //this is an html collection, it is an array
//   const squareArray = Array.from(square)
  const message: HTMLDivElement = messageEl.current
  
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
    
//     if (message1) {
//       console.log('Element:', message1)
//       message1.textContent = 'New Game'
//     }
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

// const placePiece = (index: any, turn: string, ...board: string[]) => {
//   setBoard(board.map((item, i) => {
//         return i === index ? turn : item;
//       }))
//         console.log(board)
// }

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

let turnCounter: number = 0

const newUpdatedMessage = () => {
  if (turnCounter === 0) {
    message.textContent = "New Game! Player X's Turn!"
  }
}



const handleClick = (event: any): any => {
  turnCounter++
  console.log(turnCounter)
  console.log(event.target.id)
  if (event.target.textContent === 'X' || event.target.textContent === 'O') {
    return 
  } else if (winner === true) {
    return
  }
  if (turn === 'X') {
    console.log(event.target)
    event.target.textContent = 'X';
  }
  if (turn === 'O') {
    event.target.textContent = 'O'
  }
}




/*----------------------------- Event Listeners -----------------------------*/


  return (
    <>
      <div className='game'>
        <h1 className='title'>Tic-Tac-Toe</h1>
        <h2 className='message'>Message</h2>

        <section className="board">
        <div className="sqr" id="0" onClick={handleClick}></div>
        <div className="sqr" id="1" onClick={handleClick}></div>
        <div className="sqr" id="2" onClick={handleClick}></div>
        <div className="sqr" id="3" onClick={handleClick}></div>
        <div className="sqr" id="4" onClick={handleClick}></div>
        <div className="sqr" id="5" onClick={handleClick}></div>
        <div className="sqr" id="6" onClick={handleClick}></div>
        <div className="sqr" id="7" onClick={handleClick}></div>
        <div className="sqr" id="8" onClick={handleClick}></div>
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
// ref={messageEl}