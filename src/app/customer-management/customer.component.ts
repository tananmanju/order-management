import { Component } from '@angular/core';

@Component({
	selector: 'app',
	template: `<section>
    <h1>{{title}}</h1>
    <ul class="container">
        <li *ngFor="let customer of customers" class="box">
            <h2 class="heading left__padding">{{customer.name}}
                <span><i aria-hidden="true" class="fa fa-pencil-square-o icon-align"></i></span>
            </h2>

            <div class="image-grid">
                <figure class="rm-margin"><img [src]="customer.image" class="left__padding" height=100 width=100></figure>
                <address class="top-padding font-size"><strong>{{customer.address.city}}</strong><br />
                    <strong>{{customer.address.street}}</strong><br /><br />
                    <a class="view-order" href="#">View Orders</a>
                </address>
            </div>

        </li>
    </ul>
</section>`,
	styles: [`.container {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
	}

	.box {
	    background-color: #f1f1f1;
	    width: 300px;
	    margin: 10px;
	    height: 200px;
	    box-shadow: 2px 3px 4px 5px #ae8888;
	}

	.heading {
	    margin: 0px;
	    background-color: #5656f0;
	    color: #fff;
	    line-height: 56px;
	}

	.image-grid {
	    display: flex;
	    flex-wrap: wrap;
	}

	.left__padding {
	    padding-left: 5px;
	}

	.icon-align {
	    float: right;
	    padding-top: 18px;
	    padding-right: 5px;
	}

	.rm-margin {
	    margin: 10px;
	}

	.view-order {
	    text-decoration: none;
	}

	.top-padding {
	    padding-top: 10px;
	}

	.font-size {
	    font-size: 20px;
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
