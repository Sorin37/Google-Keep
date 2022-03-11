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
      categoryId: '1'
    },
    {
      id: 'Id2',
      title: 'Second note',
      description: 'This is the description for the second note',
      categoryId: '2'
    },
    {
      id: 'Id3',
      title: 'Third note',
      description: 'This is the description for the third note',
      categoryId: '3'
    },
  ];

  constructor() {}

  serviceCall() {
    // console.log('Note service was called');
    this.addNote('Fourth note', 'This is the description for the fourth note', '1');
  }
  getNotes(): Note[] {
    // console.log('Am luat notite');
    return this.notes;
  }
  addNote(title: string, description: string, categoryId:string): void {
    let newNote: Note = {
      id: "Id" + this.notes.length,
      title: title,
      description: description,
      categoryId: categoryId
    };
    this.notes[this.notes.length] = newNote;
  }
  getFilteredNotes(categoryId:string){
    // return this.notes.filter((note) => { note.categoryId === categoryId })
    return this.notes.filter(note=> note.categoryId === categoryId)
  }
  getMatchingNotes(searchString:string){
    if(searchString !== undefined){
      searchString = searchString.toLowerCase();
    }
    return this.notes.filter(note => (note.title.toLowerCase().includes(searchString) 
                                   || note.description.toLowerCase().includes(searchString)));
  }
}
