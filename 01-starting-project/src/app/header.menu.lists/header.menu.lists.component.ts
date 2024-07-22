import { Component } from '@angular/core';

@Component({
  selector: 'app-header.menu.lists',
  standalone: true,
  imports: [],
  templateUrl: './header.menu.lists.component.html',
  styleUrl: './header.menu.lists.component.css'
})
export class HeaderMenuListsComponent {
  readonly header_list:any;
  constructor(header_list:any){
    this.header_list = header_list;
  }
}
