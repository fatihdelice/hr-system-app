import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { employees } from '../employees';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  employees = employees;

  constructor(
    private router: Router,
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
      console.log(params);
    });

    let page = this.route.snapshot.queryParamMap.get('page');
    console.log(page);
  }

  loadProducts() {
    this.router.navigate(['/employee'], {
      queryParams: {
        page: 1,
      }
    });
  }

}
