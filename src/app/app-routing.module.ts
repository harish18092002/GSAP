import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Animat1Component } from './animat1/animat1.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: 'animate', component: Animat1Component },
      { path: '**', redirectTo: 'animate' },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}