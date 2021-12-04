import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { BindingComponent } from './binding/binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { TempformComponent } from './tempform/tempform.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustompipePipe } from './custompipe.pipe';
import { FormComponent } from './form/form.component';
import { CustdirectiveDirective } from './custdirective.directive';
import { LifeCycle1Component } from './life-cycle1/life-cycle1.component';
import { Child1Component } from './life-cycle1/child1/child1.component';
import { HttpClientModule } from '@angular/common/http';
import { RrxjsoperatorsComponent } from './rrxjsoperators/rrxjsoperators.component';
import { PromiseComponent } from './promise/promise.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    BindingComponent,
    DirectiveComponent,
    TempformComponent,
    ReactiveFormComponent,
    PipesComponent,
    CustompipePipe,
    FormComponent,
    CustdirectiveDirective,
    LifeCycle1Component,
    Child1Component,
    RrxjsoperatorsComponent,
    PromiseComponent,
    
  ],
  imports: [BrowserModule,
    FormsModule,ReactiveFormsModule,HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
