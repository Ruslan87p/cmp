import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChipService {

  constructor() { }

  public cellBlack = '<div class="black" id="black"></div>';
  public cellWhite = '<div class="white" id="white"></div>';

  public cellLimit = 8;
  public allLimit = 64;

  public chipBlack = `<div class="chip-black"> </div>`;
  public chipWhite = `<div class="chip-white"> </div>`;


  createBoard(board) {
    const container = board.nativeElement;
    for(let i = 0; i < this.cellLimit; i++) {
        for(let j = 0; j < this.cellLimit; j++) {
            if((i + j) % 2 == 0) {
              container.insertAdjacentHTML('beforeend', this.cellBlack);
            } else {
              container.insertAdjacentHTML('beforeend', this.cellWhite);
            }
        }
    }
  }


  createChip(board) {

    const elements = board.nativeElement.children;

    for (let ind = 0; ind < elements.length; ind++) {
      const className = elements[ind].className;
      const elementInd = elements[ind];
      


      if (className === 'black') {
        
        // while (elementInd.length < 16) {
          elementInd.insertAdjacentHTML('afterbegin', this.chipBlack);
          console.log(this.chipBlack.length, 'elementInd');
        // }

      }

       else {
        elementInd.insertAdjacentHTML('afterbegin', this.chipWhite);
      }
    }
  }

}
