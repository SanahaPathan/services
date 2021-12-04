import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  constructor() { }

  //Interpolation 
  name1:string="Data Binding"
  name2:any="another string"
  name3:any="demo string"
  hero:string="Angular"
  //attribute binding 
  link:any="https://www.amazon.in/?tag=aceredge-ubpl-pczz-pzz-in-21"
  defaultname:string="sanaha"

  ngOnInit(): void {
  }
//event binding
Showdata(){
  console.log("hello everyone")
}
//Two way data binding
age:number=10;
}
