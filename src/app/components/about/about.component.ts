import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  first: string;
  last: string; 
  mail: string;
  comments: string;

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

  Add() {
  var div = document.querySelector('div.texts');
  var elem = document.createElement('p');
  var elemText = document.createTextNode(`${this.comments}`);
  if ((this.comments != undefined) && (this.comments != '')) {
  	elem.appendChild(elemText);
 	div.appendChild(elem);
  }
}

Delete() {
  var div = document.querySelector('div.texts');
  var remove = document.querySelectorAll('div.texts p')[0];
  div.removeChild(remove);
}

  ngOnInit() {
  }

}
