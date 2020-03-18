import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {

  displayTxt: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  greetMe(){
    this.displayTxt = true;
  }
}
