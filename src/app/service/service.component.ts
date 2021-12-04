import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  public data:any;
  public errorFlag:boolean= false;
  
  constructor(private mySer: MyserviceService) { }
 

  ngOnInit(): void {

    this.mySer.getData().subscribe((res:any)=>{
      this.data= res;
      console.log(this.data);
    },
    (err:any)=>{
      this.errorFlag= true;
      console.log(err);
      console.log("hello error comes");
    }
  );
  this.tempFun();
  }
  tempFun(){
    console.log('Hello In the temp function');
  }

}
