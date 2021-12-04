import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustdirective]'
})
export class CustdirectiveDirective {

  constructor(private ele: ElementRef) {
    this.ele.nativeElement.style.background = "blue";
    this.ele.nativeElement.style.color = 'red';
    this.ele.nativeElement.style.fontweight = 'bold';
   }
   

}
