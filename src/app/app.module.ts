import { PublicationsModule } from './features/pages/publications/publications.module';
import { PeopleModule } from './features/pages/people/people.module';
import { AboutModule } from './features/pages/about/about.module';
import { HeaderModule } from './shared/components/header/header.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MediaModule } from './features/pages/media/media.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    AboutModule,
    PeopleModule,
    PublicationsModule,
    MediaModule,
    MatIconModule
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

  bootstrap: [AppComponent]
})
export class AppModule { }
