import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-busydevelopers-ngfor-changedetection',
  templateUrl: './busydevelopers-ngfor-changedetection.component.html',
  styleUrls: ['./busydevelopers-ngfor-changedetection.component.css']
})
export class BusydevelopersNgforChangedetectionComponent implements OnInit {

  courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course2'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onAdd() {
    this.courses.push({id: 4, name: 'course4'});
  }

  onRemove(course) {
    const index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
}
