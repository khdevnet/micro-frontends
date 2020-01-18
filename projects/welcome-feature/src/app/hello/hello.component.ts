import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sayHello(){
    alert('hello guest! Do you enjoy our catalog?');
  }

}
