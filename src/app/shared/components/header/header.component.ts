import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() logo: string = 'assets/icon.png';

  constructor() { }

  ngOnInit(): void {
  }

  onToggleMenu(): void {
    document.querySelector('#menuAnimation')?.classList.toggle('active');
  }
}
