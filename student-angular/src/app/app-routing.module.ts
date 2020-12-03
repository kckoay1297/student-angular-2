import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentFormComponent } from './student-form/student-form.component';

const routes: Routes = [
  {
    path: 'app-student-form',
    component: StudentFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }