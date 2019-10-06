import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-busydevelopers-ngfor-trackby',
  templateUrl: './busydevelopers-ngfor-trackby.component.html',
  styleUrls: ['./busydevelopers-ngfor-trackby.component.css']
})
export class BusydevelopersNgforTrackbyComponent implements OnInit {

  courses;

  constructor() {
  }

  ngOnInit() {
  }

  loadCourses() {
    this.courses = [
      {id: 1, name: 'course1'},
      {id: 2, name: 'course2'},
      {id: 3, name: 'course2'}
    ];
  }

  trackCourse(index, course) {
   return  course ? course.id : undefined;
  }
}
