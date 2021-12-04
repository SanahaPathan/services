import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  userForm:any=FormGroup
  isSubmitted:boolean=false;

  ngOnInit(): void {

    // this.userForm=this.fb.group({
    //   fname:['',[Validators.required]],
    //   lname:[''],
    //   email:['', [Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
    //   pass:[''],
    //   cpass:['']
    // })
  }

  
  onSubmitForm(){
    console.log(this.userForm);
    console.log(this.userForm.value);
    this.isSubmitted=true
  }
  get f(){
    // console.log(this.userForm.controls.fname);
    return this.userForm.controls;
  }

}
