import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaComponent } from './media.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [
    MediaComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatGridListModule
  ]
})
export class MediaModule { }
