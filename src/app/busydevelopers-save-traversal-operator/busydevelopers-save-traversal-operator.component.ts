import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-busydevelopers-save-traversal-operator',
  templateUrl: './busydevelopers-save-traversal-operator.component.html',
  styleUrls: ['./busydevelopers-save-traversal-operator.component.css']
})
export class BusydevelopersSaveTraversalOperatorComponent implements OnInit {

  task = {
    title: 'Review applications',
    assigne: {
      name: 'John Smith'
    }
  };

  constructor() {
  }

  ngOnInit() {
  }

}
