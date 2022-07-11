import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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

  constructor(private ordersService: OrdersService) {
    this.title = 'list of orders';
    this.headers = ['Type', 'désignation', 'nb jours', 'tjm', 'total', 'state'];
    this.collection$ = this.ordersService.collection$;
  }

  ngOnInit(): void {}

  public changeTitle(): void {
    this.title = 'le titre a changé';
  }
}
