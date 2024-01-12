import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Compo01Component } from './componentes/compo01/compo01.component';
import { Compo02Component } from './componentes/compo02/compo02.component';

@NgModule({
  declarations: [
    AppComponent,
    Compo01Component,
    Compo02Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
