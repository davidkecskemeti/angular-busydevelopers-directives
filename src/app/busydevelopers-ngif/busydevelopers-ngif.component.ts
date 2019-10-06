import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-busydevelopers-ngif',
  templateUrl: './busydevelopers-ngif.component.html',
  styleUrls: ['./busydevelopers-ngif.component.css']
})
export class BusydevelopersNgifComponent implements OnInit {

  courses = [1, 2];

  constructor() {
  }

  ngOnInit() {
  }

  doWeHaveAnyCourses() {
    return this.courses.length > 0;
  }

}
