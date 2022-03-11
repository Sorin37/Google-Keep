import { Component, Input, OnChanges, OnInit } from '@angular/core';
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
    this.noteService.serviceCall();
    this.notes = this.noteService.getNotes();
  }
  ngOnChanges(): void {
    // console.log('searchString is: ' + this.searchString);
    // console.log('selected Category: ' + this.selectedCategoryId);
    this.notes = this.noteService.getFilteredNotes(this.selectedCategoryId);
    if (this.searchString !== undefined) {
      this.notes = this.noteService.getMatchingNotes(this.searchString);
    }
  }
}
