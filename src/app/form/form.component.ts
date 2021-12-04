import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  courses:any=['E&TC','Electrical','Mechanical','Computer','Civil']
  TableData:any=[];
    
  obj = {
      
      fname:"",
      lname:"",
      email:"",
      course:"",
      gender:"",
      dateofbirth:"",
     };

  ngOnInit(): void {
  }
  DataSubmit(StudentRegForm:any){
    this.TableData.push(StudentRegForm.value)
    
  }

}
