import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Pass6040eleComponent } from './pass6040ele/pass6040ele.component';
import { Pass100eleComponent } from './pass100ele/pass100ele.component';
import { Pass303040eleComponent } from './pass303040ele/pass303040ele.component';
import { PasseleComponent } from './passele/passele.component';

@NgModule({
  declarations: [
    AppComponent,
    Pass6040eleComponent,
    Pass100eleComponent,
    Pass303040eleComponent,
    PasseleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
