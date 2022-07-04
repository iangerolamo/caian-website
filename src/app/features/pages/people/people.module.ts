import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    PeopleComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ]
})
export class PeopleModule { }
