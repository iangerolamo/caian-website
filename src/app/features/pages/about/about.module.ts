import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';





@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class AboutModule { }
