import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentRestService } from '../api/student-rest.service';
import { StudentForm } from '../model/student-form';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  subscription:Subscription;
  studentList: StudentForm[];

  constructor(private route: ActivatedRoute, private router: Router,private studentRestService: StudentRestService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };

    this.studentRestService.findAll().subscribe((result) => {
      this.studentList = result as StudentForm[];
    });

  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
