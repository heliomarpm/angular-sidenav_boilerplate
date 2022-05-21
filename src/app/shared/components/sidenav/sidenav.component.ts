import { Component, OnInit } from '@angular/core';
import { Event, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SideNavComponent implements OnInit {

  public selectedUrl = '';
  public pages = [
    {
      title: 'Dashboard', url: 'home', icon: 'fa-duotone fa-house'
    },
    {
      title: 'Produtos', url: 'produtos', icon: 'fa-duotone fa-magnifying-glass-arrow-right'
    },
    {
      title: 'Vendas', url: 'vendas', icon: 'fa-duotone fa-cart-arrow-down'
    },
    {
      title: 'Fluxo de Caixa', url: 'fluxo-caixa', icon: 'fa-duotone fa-cash-register'
    },
    {
      title: 'Pedidos', url: 'pedidos', icon: 'fa-duotone fa-box-taped'
    },
    {
      title: 'Cadastros', url: '#', icon: 'fa-solid fa-cabinet-filing'
    },
  ];

  constructor(private router: Router) {
    router.events.pipe(
      filter((e: Event): e is RouterEvent => e instanceof RouterEvent)
    ).subscribe((e: RouterEvent) => {
      this.selectedUrl = e.url;
    });
  }

  ngOnInit(): void {
  }

}
