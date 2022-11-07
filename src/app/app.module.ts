import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MeasurementInputComponent } from './measurement-input/measurement-input.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatInputModule, MatSelectModule ],
  declarations: [ AppComponent, HelloComponent, MeasurementInputComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
