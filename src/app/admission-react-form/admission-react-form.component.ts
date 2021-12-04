import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-admission-react-form',
  templateUrl: './admission-react-form.component.html',
  styleUrls: ['./admission-react-form.component.css']
})
export class AdmissionReactFormComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  userForm:any=FormGroup
  isSubmitted:boolean=false;


  ngOnInit(): void {
    this.userForm=this.fb.group({
      fname:['',[Validators.required]],
      lname:[''],
      email:['', [Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      pass:[''],
      cpass:['']
    })
  }

}
