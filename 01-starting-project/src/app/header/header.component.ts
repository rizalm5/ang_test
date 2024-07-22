import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroUsers, heroKey } from '@ng-icons/heroicons/outline';
import { CompData } from '../CompiledData';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIconComponent, CommonModule],
  providers: [provideIcons({ heroUsers, heroKey })],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent extends CompData{

public get MenuList() {
    return this.head;
  }
  

}

