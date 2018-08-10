import { Component, OnInit } from '@angular/core';
import {INgxMyDpOptions, IMyDateModel} from 'ngx-mydatepicker';

@Component({
  selector: 'sig-date',
  templateUrl: './sig-date.component.html',
  styleUrls: ['./sig-date.component.css']
})
export class SigDateComponent { 

  public myModel = ''
  public mask = [/[1-9]/, /\d/, '/',  /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]

  myOptions: INgxMyDpOptions = {    
    dateFormat: 'dd/mm/yyyy',
    maxYear: 2050
  };

   constructor() { }   
    
    onDateChanged(event: IMyDateModel): void {
      
    }
  }