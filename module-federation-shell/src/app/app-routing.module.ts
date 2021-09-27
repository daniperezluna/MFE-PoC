import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const HEADER_URL = 'http://localhost:3000/remoteEntry.js';


const routes: Routes = [
  {
    path: 'books',
    loadChildren: () => import('mfeBooks/Module').then(m => m.BooksModule)
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '',
    outlet: 'header',
    loadChildren: () => loadRemoteModule({
        remoteEntry: HEADER_URL,
        remoteName: 'mfeHeader',
        exposedModule: './Module'
      })
      .then(m => m.HeaderModule) 
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
