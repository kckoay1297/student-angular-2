import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentRestService } from '../api/student-rest.service';
import { StudentForm } from '../model/student-form';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit, OnDestroy {

  data: any = {};
  model = new StudentForm('', '', '', '','', '');
  public finalResult: StudentForm = new StudentForm('','','','','','');

  subscription:Subscription;

  constructor(private route: ActivatedRoute, private router: Router,private studentRestService: StudentRestService) { }

  submitted = false;

  ngOnInit(): void {
  }

  save(form: NgForm) {
    this.studentRestService.save(form).subscribe((result) => {
      console.log(result);
      this.finalResult = new StudentForm(result.studentId, result.studentName, result.nric, result.gender, result.email, result.phoneNumber);
    }, error => {
      this.finalResult = new StudentForm(error.id, error.studentName, error.nric, error.gender, error.email,error.phoneNumber);
    });
    this.submitted = true;
  }

  get diagnostic() { return JSON.stringify(this.model); }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
