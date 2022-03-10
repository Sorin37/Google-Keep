import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Note } from '../note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  notes: Note[] = [
    {
      id: 'Id1',
      title: 'First note',
      description: 'This is the description for the first note',
    },
    {
      id: 'Id2',
      title: 'Second note',
      description: 'This is the description for the second note',
    },
  ];
  colors: string[] = ['red', 'yellow', 'green', 'blue', 'cyan', 'pink'];
  form: FormGroup;

  constructor() {}

  ngOnInit(): void {
    
  }
}
