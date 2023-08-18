import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemperatureInputComponent } from './temperature-input/temperature-input.component';

@NgModule({
  declarations: [
    AppComponent,
    TemperatureInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
