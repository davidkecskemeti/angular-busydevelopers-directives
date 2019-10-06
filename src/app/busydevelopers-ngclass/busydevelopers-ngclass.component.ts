import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-busydevelopers-ngclass',
  templateUrl: './busydevelopers-ngclass.component.html',
  styleUrls: ['./busydevelopers-ngclass.component.css']
})
export class BusydevelopersNgclassComponent implements OnInit {

  isSelected = false;

  constructor() {
  }

  ngOnInit() {
  }

  onClick() {
    this.isSelected = !this.isSelected;
  }
}
