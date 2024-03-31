import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Animat1Component } from './animat1/animat1.component';
import { AppComponent } from './app.component';
import { AnimatesecondComponent } from './animatesecond/animatesecond.component';
import { AnimatethirdComponent } from './animatethird/animatethird.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: 'animate', component: Animat1Component },
      { path: 'animatesecond', component: AnimatesecondComponent },
      { path: 'animatethird', component: AnimatethirdComponent },

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