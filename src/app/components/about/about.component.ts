import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  first!: string;
  last!: string; 
  mail!: string;
  comments!: string;

  constructor() { }

  Submit() {
  	if (
      ((this.first != undefined) && (this.first != '')) 
  		&& 
  		((this.mail != undefined) && (this.mail != ''))
  		) {
  		  console.log(`Firstname: ${this.first}, Lastname: ${this.last}, mail: ${this.mail}`);
  		}
  }

  ngOnInit() {
  }

}
