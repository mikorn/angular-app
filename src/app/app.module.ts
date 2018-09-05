import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { WorkerListComponent } from './worker-list/worker-list.component';
import { WorkerProfileComponent } from './worker-profile/worker-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerProfileComponent,
    WorkerListComponent,
    WorkerProfileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
