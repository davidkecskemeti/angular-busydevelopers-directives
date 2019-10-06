import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-busydeveloper-ngfor',
  templateUrl: './busydeveloper-ngfor.component.html',
  styleUrls: ['./busydeveloper-ngfor.component.css']
})
export class BusydeveloperNgforComponent implements OnInit {

  courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course2'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
