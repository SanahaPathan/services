import { Component, OnInit,OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy } from '@angular/core';

@Component({
  selector: 'app-life-cycle1',
  templateUrl: './life-cycle1.component.html',
  styleUrls: ['./life-cycle1.component.css']
})
export class LifeCycle1Component implements OnInit,OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {

  constructor() { }

  ngOnChanges(){
    console.log('Component: ngOnChanges');
  }

  ngOnInit(){
    console.log('Component: ngOnInit');
  }

  ngDoCheck(){
    console.log('Component: ngDoCheck');
  }

  ngAfterContentInit(){
    console.log('Component: ngAfterContentInit');
  }

  ngAfterContentChecked(){
    console.log('Component: ngAfterContentChecked');
  }

  ngAfterViewInit(){
    console.log('Component: ngAfterViewInit');
  }

  ngAfterViewChecked(){
    console.log('Component: ngAfterViewChecked');
  }

  ngOnDestroy(){
    console.log('Component: ngDestory');
  }
  
}
