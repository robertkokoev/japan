import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-burger-btn',
  templateUrl: './burger-btn.component.html',
  styleUrls: ['./burger-btn.component.css']
})
export class BurgerBtnComponent implements OnInit {
  activeBtn!: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.activeBtn = !this.activeBtn;
  }

}
