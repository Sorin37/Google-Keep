import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  title:string;
  description:string;
  form: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      "title": new FormControl("", [
        Validators.required,
        Validators.minLength(5),
      ]),
      "description": new FormControl("")
    });
  }
  get title2() { return this.form.get('title'); }

  get description2() { return this.form.get('description'); }
}
