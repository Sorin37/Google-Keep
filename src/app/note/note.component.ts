import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Note } from '../note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  notes: Note[];
  colors: string[] = ['red', 'yellow', 'green', 'blue', 'cyan', 'pink', 'orange', 'gray'];
  form: FormGroup;

  constructor(
    private noteService: NoteService
  ) {}

  ngOnInit(): void {
    this.noteService.serviceCall();
    this.notes=this.noteService.getNotes();
  }
}
