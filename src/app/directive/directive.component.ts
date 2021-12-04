import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  admin = true;
  //structural directive
  showDataFlag:boolean=true;
  names:any=['Rahul','Akshay','Mahesh','Komal']
  num:number=2;
  myclass1:any="test1";
  myclass2:any="test2";
  mystyle:any={'color':'red','fontsize':'bold'}
  

  constructor() { }

  ngOnInit(): void {

     if(this.showDataFlag == true){
    this.myclass1= "test1";
     }
     else{
     this.myclass2 = "test2";
    }
  }
  }
