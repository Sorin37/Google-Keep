import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'notes-app';
  text:string = 'TeSt';
  dateTest:Date = new Date(6,6,2001);
  myValue:number = 0;
}
