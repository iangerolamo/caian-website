import { MediaComponent } from './features/pages/media/media.component';
import { PublicationsComponent } from './features/pages/publications/publications.component';
import { PeopleComponent } from './features/pages/people/people.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './features/pages/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  // {
  //   path: 'people',
  //   component: PeopleComponent
  // },
  {
    path: 'publications',
    component: PublicationsComponent
  },
  {
    path: 'media',
    component: MediaComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
