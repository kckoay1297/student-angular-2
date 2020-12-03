import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentRestService } from '../api/student-rest.service';
import { StudentForm } from '../model/student-form';
import { Course } from '../model/course';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-course-list',
  templateUrl: './student-course-list.component.html',
  styleUrls: ['./student-course-list.component.css']
})
export class StudentCourseListComponent implements OnInit {

  subscription:Subscription;
  courseList: Course[];
  studentList: StudentForm[];
  id: string;

  constructor(private route: ActivatedRoute, private router: Router,private studentRestService: StudentRestService) { }

  ngOnInit(): void {
    this.studentRestService.findCourse().subscribe((result) => {
      this.courseList = result as Course[];
    });
  }

  getStudentByCourseId(id: string){
    this.studentRestService.findStudentByCourseId(id).subscribe(
      (result) => {
        this.studentList = result as StudentForm[];
      }
    );
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
