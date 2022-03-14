import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNoteComponent } from './add-note/add-note.component';
import { DummyComponent } from './dummy/dummy.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  { path: "add-note", component: AddNoteComponent},
  { path: "edit-note/:id", component: EditNoteComponent},
  { path: ":id", component: DummyComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
