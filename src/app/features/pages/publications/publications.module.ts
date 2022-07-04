import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicationsComponent } from './publications.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    PublicationsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule
  ]
})
export class PublicationsModule { }
