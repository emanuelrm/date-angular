import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { TextMaskModule } from 'angular2-text-mask';
import { SigDateComponent } from './sig-date/sig-date.component';  

@NgModule({
  declarations: [
    AppComponent,
    SigDateComponent
  ],
  imports: [
    BrowserModule, NgxMyDatePickerModule.forRoot(), TextMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
