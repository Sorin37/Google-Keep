import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../category';
import { NoteComponent } from '../note/note.component';
import { FilterService } from '../services/filter.service';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  title:string="";
  description:string="";
  typeOfNote:string;
  form: FormGroup;
  filters:Category[];
  constructor(
    private noteService: NoteService,
    private filterService: FilterService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      "title": new FormControl("", [
        Validators.required,
        Validators.minLength(5),
      ]),
      "description": new FormControl(""),
      "typeOfNote": new FormControl("",[
        Validators.required,
      ])
    });
    this.filters=this.filterService.getCategories();
  }
  get title2() { return this.form.get('title'); }

  get description2() { return this.form.get('description'); }

  get typeOfNote2() { return this.form.get('typeOfNote'); }

  addNote():void{
    this.noteService.addNote(this.title, this.description);
  }

}
