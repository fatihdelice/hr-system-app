import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { employees } from 'src/app/employees';

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  selectedEmployee: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // const param = this.route.snapshot.paramMap.get('id');
    // const id = param ? +param : null;
    // this.selectedProduct = products.find(i=>i.id === id);
    this.route.paramMap.subscribe(params => {
      let param = params.get('id');
      let id = param ? +param : null;
      this.selectedEmployee = employees.find(i => i.id === id);
    })
  }
}
