import { useEffect, useState} from "react";
import {Button} from '@material-ui/core';
import React from "react";
import "./components/SquareBlock.css"
import Square from './components/TicTocToe.js'


const initialstate=["","","","","","","","",""];
function App() {
     

    
   const [gamestate,updategamestate]= useState(initialstate);
   const [isxchance,updateisxchnace]=useState(false);
   const onsquareclicked = (index) => {
        
         let string =Array.from(gamestate);
         string[index]=isxchance ? "X" : "O";
         updategamestate(string);
         updateisxchnace(!isxchance);
         // alert("hello");
   }

     useEffect(() => {
         const winner = checkforwinner();
         if(winner){
            alert("winner has won!");
            updategamestate(initialstate);
         }
     }, [gamestate])

     function checkforwinner() {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (gamestate[a] && gamestate[a] === gamestate[b] && gamestate[a] === gamestate[c]) {
          return gamestate[a];
        }
      }
      return null;
    }
   return(
      <div className="App-header" >
        <div className="row jc-center">
           <Square state={gamestate[0]}  onClick={() => onsquareclicked(0)}  />
           <Square state={gamestate[1]}  onClick={() => onsquareclicked(1)}/>
           <Square state={gamestate[2]}  onClick={() => onsquareclicked(2)}/>
        </div>
        <div className="row jc-center">
        <Square state={gamestate[3]}  onClick={() => onsquareclicked(3)}/>
        <Square state={gamestate[4]}   onClick={() => onsquareclicked(4)}/>
        <Square state={gamestate[5]}  onClick={() => onsquareclicked(5)}/>
        </div>
        <div className="row jc-center">
        <Square state={gamestate[6]}  onClick={() => onsquareclicked(6) }/>
        <Square state={gamestate[7]}  onClick={() => onsquareclicked(7)}/>
        <Square state={gamestate[8]}  onClick={() => onsquareclicked(8)}/>
        </div>
        <div className="button" >
        <Button onClick={() => updategamestate(initialstate)}  variant="contained" >Clear Game</Button>
        </div>
       <div>Copyright © 2021 By the love of Tushar Inc.</div>
      </div>
   );
}
 
export default App;
