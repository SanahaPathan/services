import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import{filter, map}from 'rxjs/operators';

@Component({
  selector: 'app-rrxjsoperators',
  templateUrl: './rrxjsoperators.component.html',
  styleUrls: ['./rrxjsoperators.component.css']
})
export class RrxjsoperatorsComponent implements OnInit {
  public datastream:any;

  constructor() { 
    console.log('hello in RXJS Operator part')
  }

  ngOnInit(): void {
    this.datastream=from([1,2,3,4]);
    console.log(this.datastream);

    //this.datastream=of(1,2,3,4,5);
    //console.log(this.datastream);

    //this.datastream.subscribe((res:any)=>{console.log(res)});
    //this.datastream.pipe(map((x:any)=>x*5)).subscribe((res:any)=>{console.log(res)})

    this.datastream.pipe(filter((y:any)=>y%2===0)).subscribe((res:any)=>{console.log(res)})

  }

}
