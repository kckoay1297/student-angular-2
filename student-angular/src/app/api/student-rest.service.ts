import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentForm } from '../model/student-form';

@Injectable({
  providedIn: 'root'
})
export class StudentRestService {

  public API = '//localhost:6007/rest/student';
  public CREATION_API = this.API + '/create-student';
  public UPDATE_API = this.API + '/update-student';
  public GET_API = this.API + '/get-student-by-student-id';
  public FIND_BY_COURSE_ID_API = this.API + '/find-student-by-course-id';
  public UPDATE_CONTACT_API = this.API + '/update-student-contact';
  public DELETE_API = this.API + '/delete-student-by-id';
  public FIND_ALL_API = this.API + '/find-student-all';
  public FIND_COURSE_API = this.API + '/find-all-course';

  constructor(private http: HttpClient) { }

  get(id:string) {
    return this.http.get(this.GET_API + '/' + id);
  }

  save(data: any): Observable<any> {
    let result: Observable<any>;
    if (data.href) {
      result = this.http.put(this.UPDATE_API, data);
    } else {
      result = this.http.post(this.CREATION_API, data);
    }
    return result;
  }

  delete(id:string){
    return this.http.delete(this.DELETE_API + '/' + id);
  }

  findStudentByCourseId(courseId: string): Observable<any> {
    let result: Observable<any>;
    result = this.http.get(this.FIND_BY_COURSE_ID_API + '/' + courseId);
    return result;
  }

  findAll(): Observable<any> {
    let result: Observable<any>;
    result = this.http.get(this.FIND_ALL_API);
    return result;
  }

  findCourse(): Observable<any> {
    let result: Observable<any>;
    result = this.http.get(this.FIND_COURSE_API);
    return result;
  }

}




