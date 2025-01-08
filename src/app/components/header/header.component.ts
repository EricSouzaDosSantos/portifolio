import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [NgStyle],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuOpen: boolean = false;
  borderRadius: string = "0 0 10px 10px"

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    this.borderRadius = this.menuOpen ? "0" : "0 0 10px 10px";
  }
}

