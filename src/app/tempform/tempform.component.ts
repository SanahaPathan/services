import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tempform',
  templateUrl: './tempform.component.html',
  styleUrls: ['./tempform.component.css']
})
export class TempformComponent implements OnInit {

  myclass:any="test1";

  constructor() {  }
  courses:any=['E&TC','Electrical','Mechanical','Computer','Civil']

data:any=['E&TC','Electrical','Mechanical']
  

  ngOnInit(): void {
  }
  
  onSubmitForm(formData:any){
    console.log(formData);
  }

}
