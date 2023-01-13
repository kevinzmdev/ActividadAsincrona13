import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JSonComponent } from './j-son/j-son.component';



@NgModule({
  declarations: [
    JSonComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    JSonComponent
  ]
})
export class FormModule { }
