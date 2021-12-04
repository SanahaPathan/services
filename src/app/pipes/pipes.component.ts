import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }
  sampleText:string="Angular pipe work"
  date=new Date ()
  student ={
    fname:'sana',
    lname:'sizan',
    age:25
  };
  salary:number = 10000;

  ngOnInit(): void {
  }

}
