import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Category } from '../category';
import { Note } from '../note';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  readonly baseUrl = 'https://localhost:4200';

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getNote(id:string){
    return this.httpClient.get<Note>(
      this.baseUrl + '/notes/' + id,
      this.httpOptions
    );
  }
  getNotes(): Observable<Note[]> {
    return this.httpClient.get<Note[]>(
      this.baseUrl + '/notes',
      this.httpOptions
    );
  }

  getFilteredNotes(categoryId: string): Observable<Note[]> {
    return this.httpClient
      .get<Note[]>(this.baseUrl + '/notes', this.httpOptions)
      .pipe(
        map((notes: Note[]) => {
          return notes.filter((note) => note.categoryId === categoryId);
        })
      );
  }
  addNote(note: Note) {
    return this.httpClient.post(
      this.baseUrl + '/notes',
      note,
      this.httpOptions
    );
  }
  deleteNote(id:string){
    return this.httpClient.delete(this.baseUrl + '/notes/' + id, this.httpOptions);
  }
  updateNote(note:Note){
    return this.httpClient.put(this.baseUrl + '/notes/' + note.id, note, this.httpOptions);
  }
  // serviceCall() {
  //   // console.log('Note service was called');
  //   this.addNote(
  //     'Fourth note',
  //     'This is the description for the fourth note',
  //     '1'
  //   );
  // }
  // getNotes(): Note[] {
  //   // console.log('Am luat notite');
  //   return this.notes;
  // }
  // addNote(title: string, description: string, categoryId: string): void {
  //   let newNote: Note = {
  //     id: 'Id' + this.notes.length,
  //     title: title,
  //     description: description,
  //     categoryId: categoryId,
  //   };
  //   this.notes[this.notes.length] = newNote;
  // }
  // getFilteredNotes(categoryId: string) {
  //   // return this.notes.filter((note) => { note.categoryId === categoryId })
  //   return this.notes.filter((note) => note.categoryId === categoryId);
  // }
  // getMatchingNotes(searchString: string) {
  //   if (searchString !== undefined) {
  //     searchString = searchString.toLowerCase();
  //   }
  //   return this.notes.filter(
  //     (note) =>
  //       note.title.toLowerCase().includes(searchString) ||
  //       note.description.toLowerCase().includes(searchString)
  //   );
  // }
}
