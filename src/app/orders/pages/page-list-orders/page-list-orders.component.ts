import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  public title: string;
  public collection$: Observable<Order[]>;
  public headers: string[];
  public states: string[];

  constructor(private ordersService: OrdersService, private router: Router) {
    this.title = 'list of orders';
    this.collection$ = this.ordersService.collection$;
    this.headers = [
      'Actions',
      'Type',
      'désignation',
      'nb jours',
      'tjm',
      'total',
      'state',
    ];
    this.states = Object.values(StateOrder);
  }

  ngOnInit(): void {}

  public changeTitle(): void {
    this.title = 'le titre a changé';
  }

  public changeState(item: Order, event: any) {
    const state = event.target.value;
    this.ordersService
      .changeState(item, state)
      .subscribe((data) => Object.assign(item, data));
  }

  public goToEdit(id: number) {
    this.router.navigate(['orders', 'edit', id]);
  }
}
