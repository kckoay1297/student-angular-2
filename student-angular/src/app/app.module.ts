import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StudentFormComponent } from './student-form/student-form.component';
import { FormsModule } from '@angular/forms';
import { StudentListComponent } from './student-list/student-list.component';
import { DataTablesModule } from 'angular-datatables';
import { StudentCourseListComponent } from './student-course-list/student-course-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentFormComponent,
    StudentListComponent,
    StudentCourseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule, 
    FormsModule, 
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
