import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Note } from '../note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit, OnChanges {
  notes: Note[];
  colors: string[] = [
    'red',
    'yellow',
    'green',
    'blue',
    'cyan',
    'pink',
    'orange',
    'gray',
  ];

  @Input() selectedCategoryId: string;
  @Input() searchString: string;

  constructor(private noteService: NoteService) {}
  ngOnInit(): void {
    this.noteService.getNotes().subscribe((notes: Note[]) => {
      this.notes = notes;
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.noteService
      .getFilteredNotes(this.selectedCategoryId)
      .subscribe((note: Note[]) => (this.notes = note));
  }
  deleteNote(id: string) {
    this.noteService.deleteNote(id).subscribe((notes: Note[]) => {
      this.notes = notes;
    });
    this.noteService.getNotes().subscribe((notes: Note[]) => {
      this.notes = notes;
    });
  }
  // ngOnInit(): void {
  //   this.noteService.serviceCall();
  //   this.notes = this.noteService.getNotes();
  // }
  // ngOnChanges(): void {
  //   // console.log('searchString is: ' + this.searchString);
  //   // console.log('selected Category: ' + this.selectedCategoryId);
  //   this.notes = this.noteService.getFilteredNotes(this.selectedCategoryId);
  //   if (this.searchString !== undefined) {
  //     this.notes = this.noteService.getMatchingNotes(this.searchString);
  //   }
  // }
}
