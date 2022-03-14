import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../category';
import { Note } from '../note';
import { FilterService } from '../services/filter.service';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss'],
})
export class EditNoteComponent implements OnInit {
  title: string;
  description: string;
  typeOfNote: string;
  form: FormGroup;
  filters: Category[];
  parameterValue: string;
  constructor(
    private noteService: NoteService,
    private filterService: FilterService,
    private _activationRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activationRoute.params.subscribe((parameter) => {
      this.parameterValue = this._activationRoute.snapshot.paramMap.get('id');
    });
    this.noteService.getNote(this.parameterValue).subscribe((note: Note) => {
      this.title = note.title;
      this.description = note.description;
      this.typeOfNote = note.categoryId;
    });
    this.form = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      description: new FormControl(''),
      typeOfNote: new FormControl('', [Validators.required]),
    });
    this.filters = this.filterService.getCategories();
  }
  get title2() {
    return this.form.get('title');
  }

  get description2() {
    return this.form.get('description');
  }

  get typeOfNote2() {
    return this.form.get('typeOfNote');
  }

  editNote() {
    const note:Note = {
      id : this.parameterValue,
      title: this.title,
      description: this.description,
      categoryId: this.typeOfNote
    }
    this.noteService.updateNote(note).subscribe();
  }
}
