import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ChipService } from '../chip.service';

@Component({
  selector: 'app-boar',
  templateUrl: './boar.component.html',
  styleUrls: ['./boar.component.css']
})
export class BoarComponent implements AfterViewInit {

  constructor(private boardSvc: ChipService) { }

  @ViewChild('board', {static: false}) board; 



  ngAfterViewInit() {

    this.boardSvc.createBoard(this.board);
    this.boardSvc.createChip(this.board);

  }

}
