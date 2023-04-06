import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { HistoryComponent } from './history/history.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { VacationsComponent } from './vacations/vacations.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  {
    path: 'employees', component: EmployeesComponent, canActivate: [AuthGuard],
    children: [
      { path: ':id', component: EmployeesComponent },
    ]
  },
  { path: 'history', component: HistoryComponent, canActivate: [AuthGuard] },
  { path: 'holidays', component: HolidaysComponent, canActivate: [AuthGuard] },
  { path: 'vacations', component: VacationsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
