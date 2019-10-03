import { Component } from '@angular/core';

@Component({
		  selector: 'app',
		  template: `<section>
					  <h1>{{title}}</h1>
					  <ul class="container">
					  <li class="box" *ngFor="let customer of customers"><h2 class="heading">{{customer.name}}</h2>
					  <div class="image-grid">
					  <div><img width=100 height=100 [src]="customer.image"></div>
					  <div>{{customer.address.city}}</div>
					  </div>
					  </li>
					  </ul>
		  </section>`,
		  styles: [`.container{
						  display: flex; flex-wrap: wrap; list-style: none;}
                    .box{ background-color: #f1f1f1; width: 300px;
						  margin: 10px; text-align: center;
						  line-height:56px;
						  height:200px;box-shadow: 2px 3px 4px 5px #ae8888;
}
				    .heading{
                          margin: 0px;
                     background-color: #5656f0;}
						  .image-grid{
						      display: flex;
                              flex-wrap: wrap;
						  }`]

})
export class CustomerComponent {
  title = 'order-management';
  customers:Array<object>;

	constructor(){
		fetch("http://localhost:5000/api/users/all")
		.then(response=>response.json())
		.then(users=>{
			this.customers = users;
		})
		.catch(err=>{
			console.error(err);
		})
	}
}
