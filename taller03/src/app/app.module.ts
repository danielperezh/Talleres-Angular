import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Compo01Component } from './compo01/compo01.component';
import { Compo02Component } from './compo02/compo02.component';
import { Compo03Component } from './compo03/compo03.component';
import { Compo04Component } from './compo04/compo04.component';

@NgModule({
  declarations: [
    AppComponent,
    Compo01Component,
    Compo02Component,
    Compo03Component,
    Compo04Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
