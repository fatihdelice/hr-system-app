import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { HistoryComponent } from './history/history.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { VacationsComponent } from './vacations/vacations.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component:  DashboardComponent},
  { path: 'login', component:  LoginComponent},
  { path: 'dashboard', component:  DashboardComponent},
  { 
    path: 'employee', component:  EmployeeComponent, children:[
      { path: ':id', component: EmployeeComponent },
    ]
  },
  { path: 'history', component:  HistoryComponent},
  { path: 'holidays', component:  HolidaysComponent},
  { path: 'vacations', component:  VacationsComponent},
  { path: '**', component:  DashboardComponent }
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
