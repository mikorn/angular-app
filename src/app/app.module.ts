import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { WorkerListComponent } from './worker-list/worker-list.component';
import { WorkerProfileComponent } from './worker-profile/worker-profile.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerProfileComponent,
    WorkerListComponent,
    WorkerProfileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
