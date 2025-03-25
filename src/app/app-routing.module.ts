import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookComponent } from './components/book/book.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ScheduleComponent } from './components/schedule/schedule.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'book', component: BookComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'schedule', component: ScheduleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
