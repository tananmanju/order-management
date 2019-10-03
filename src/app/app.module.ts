import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CustomerComponent } from './customer-management/customer.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
 imports: [
	    BrowserModule,
  ],
  declarations: [
		    CustomerComponent
  ],
 bootstrap: [CustomerComponent]
})
export class AppModule { }
