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



/*---------------------------- Variables (state) ----------------------------*/

const [board, setBoard] = useState(['', '', '', '', '', '', '', '', ''])

const [turn, setTurn] = useState<string>('X')

const [winner, setWinner] = useState<boolean>(false)

const [tie, setTie] = useState<boolean>(false)


/*------------------------ Cached Element References ------------------------*/

const squareEls = useRef<any>(null) //useRef is used when a you want a component to 'remember some information, but you don't want that information to trigger new renders
//squareEls = getElementByClass to access all the square elements
const messageEl = useRef<any>(null)

/*-------------------------------- Functions --------------------------------*/

useEffect(() => {

  function updatedBoard () {
    board.forEach((element) => 
      console.log(element)
    //id of square = element.indexOf (0,1,2...)
    //if id of square = 0 or even textcontent = 'X'
    //if id of square = odd textcontent = 'O'
    )
  }

  function init () {
    const square: HTMLCollection = document.getElementsByClassName('sqr') //this is an html collection, it is an array
    // square.forEach(element => {
    //   element.textContent = 'x'
    // });
    // squareEls.current = square[1]
    // squareEls.current.textContent = 'x'
    Array.from(square).forEach((element: Element) => {
      console.log(element)
      element.textContent = ''
      // const number = element.indexOf
      // squareEls.current= square[element]
      // squareEls.current.textContent = 'x'
    })
    // if (square) {
    //   //for each element in square make the text content x
    //   console.log('Element:', square)
    //   square.textContent = 'x';
    // }
    const message1: HTMLDivElement = messageEl.current
    if (message1) {
      console.log('Element:', message1)
      message1.textContent = 'New Game'
    }
    function render () {
      updatedBoard()
    }
    render()
  }
  init ()
}, [board])




/*----------------------------- Event Listeners -----------------------------*/


  return (
    <>
      <div className='game'>
        <h1 className='title'>Tic-Tac-Toe</h1>
        <h2 className='message' ref={messageEl}>Message</h2>

        <section className="board">
        <div className="sqr" id="0" ref={squareEls}></div>
        <div className="sqr" id="1" ref={squareEls}></div>
        <div className="sqr" id="2" ref={squareEls}></div>
        <div className="sqr" id="3" ref={squareEls}></div>
        <div className="sqr" id="4" ref={squareEls}></div>
        <div className="sqr" id="5" ref={squareEls}></div>
        <div className="sqr" id="6" ref={squareEls}></div>
        <div className="sqr" id="7" ref={squareEls}></div>
        <div className="sqr" id="8" ref={squareEls}></div>
        </section>
      </div>

    </>
  )
}

export default App
