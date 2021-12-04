import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../servicefiles/myservice.service';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  constructor(private mySer:MyserviceService ) { }
  ngOnInit(): void {
  let error = true;

    const prom= new Promise(function(resolve,reject){
      setTimeout(function(){
        if (error){reject("this is to be rejected") }

     else{resolve("this is to be resolved"); }
   },4000)})

    prom.then((value:any)=>{
      console.log('promise is successfully executed'+ value)
    }).catch((value:any)=>{
      console.log('promise is not resolved'+ value)
    })
    this.getPromiseData()
  }

  getPromiseData(){
    this.mySer.getPromData()
    .then((res:any)=>{
      console.log(res);
    })
    .catch((err:any)=>{
      console.log(err);
    })
  }

}
