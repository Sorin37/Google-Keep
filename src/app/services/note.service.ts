import { Injectable } from '@angular/core';
import { Note } from '../note';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
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
    {
      id: 'Id3',
      title: 'Third note',
      description: 'This is the description for the third note',
    },
  ];

  constructor() {}

  serviceCall() {
    console.log('Note service was called');
    this.addNote('Fourth note', 'This is the description for the fourth note');
  }
  getNotes(): Note[] {
    console.log('Am luat notite');
    return this.notes;
  }
  addNote(title: string, description: string): void {
    let newNote: Note = {
      id: "Id" + this.notes.length,
      title: title,
      description: description,
    };
    this.notes[this.notes.length] = newNote;
  }
}
