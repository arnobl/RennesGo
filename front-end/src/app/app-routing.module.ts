import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NextComponent } from './next/next.component';

const routes: Routes = [
  { path: 'next', component: NextComponent },
  { path: '',
    redirectTo: '/next',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
