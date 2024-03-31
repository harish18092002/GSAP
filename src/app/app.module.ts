import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Animat1Component } from './animat1/animat1.component';
import { AnimatesecondComponent } from './animatesecond/animatesecond.component';
import { AnimatethirdComponent } from './animatethird/animatethird.component';

// gsap.registerPlugin(ScrollTrigger);
@NgModule({
  declarations: [
    AppComponent,
    Animat1Component,
    AnimatesecondComponent,
    AnimatethirdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
