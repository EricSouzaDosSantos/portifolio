import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  iconDetails = [
    {
      ref: 'mailto:seuemail@example.com',
      classIcon: 'fas fa-envelope',
      classHover: 'fab fa-envelope fa-shake',
      iconName: 'E-mail',
      color: '#3e65cf',
    },
    {
      ref: 'https://wa.me/5511960703544',
      classIcon: 'fab fa-whatsapp',
      iconName: 'WhatsApp',
      color: '#25D366',
    },
    {
      ref: 'https://www.linkedin.com/in/dev-eric',
      classIcon: 'fab fa-linkedin',
      classHover: 'fab fa-linkedin fa-bounce',
      iconName: 'LinkedIn',
      color: '#0077B5',
    },
    {
      ref: 'https://github.com/EricSouzaDosSantos',
      classIcon: 'fab fa-github',
      iconName: 'GitHub',
      color: '#333',
    },
  ];

  hoveredIndex: number | null = null;
  
}
