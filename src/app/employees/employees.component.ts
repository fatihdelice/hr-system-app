import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { employees } from '../employees';

@Component({
  selector: 'employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit{
  employees = employees;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // route params
    // this.route.paramMap.subscribe(params => {
    //   let id = params.get('id');
    // });
    // let id = this.route.snapshot.paramMap.get('id');

    //query params
    this.route.queryParamMap.subscribe(params => {
      // console.log(params);
    });

    let page = this.route.snapshot.queryParamMap.get('page');
    // console.log(page);
  }

}
