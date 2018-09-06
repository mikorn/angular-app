import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { WorkerListComponent } from './worker-list/worker-list.component';
import { WorkerProfileComponent } from './worker-profile/worker-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'customers', component: CustomerListComponent },
  { path: 'customers/:id', component: CustomerProfileComponent },
  { path: 'workers', component: WorkerListComponent },
  { path: 'workers/:id', component: WorkerProfileComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
