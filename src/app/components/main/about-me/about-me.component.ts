import { Component, HostListener, ElementRef, OnInit } from '@angular/core';
import { NgStyle, NgClass, CommonModule } from '@angular/common';


@Component({
  selector: 'app-about-me',
  imports: [NgStyle, NgClass, CommonModule],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  isBadgeVisible = false;
  lastScrollTop = 0;
  isModalVisible = false;
  selectedSkill = '';
  technologies: string[] = [];
  informations: string[] = [
    'ericsouzadossantos28@gmail.com',
    '(11) 96070-3544',
    'São Paulo - SP'
  ]
  skills = [
    { name: 'Java', icon: 'fab fa-java', progress: 90, color: '#f89820' },
    { name: 'Angular', icon: 'fab fa-angular', progress: 30, color: '#dd0031' },
    { name: 'Spring', icon: 'fa-solid fa-leaf', progress: 80, color: '#4caf50' },
    { name: 'SCSS', icon: 'fab fa-sass', progress: 40, color: '#c76395' },
    { name: 'Git', icon: 'fab fa-git', progress: 85, color: '#f1502f' },
    { name: 'AWS', icon: 'fab fa-aws', progress: 50, color: '#ff9900' },
  ];
  isHovered: boolean = false;
  hoveredIndex: number | null = null;
  isMobile: boolean = false;
  showHighlights: boolean = false;

  ngOnInit(): void {
    this.checkViewport();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkViewport();
  }

  private checkViewport() {
    if (typeof window !== 'undefined') {

    this.isMobile = window.innerWidth <= 768; 
    }
  }

  toggleHighlights() {
    if (this.isMobile) {
      this.showHighlights = !this.showHighlights;
    }
  }
  
  // getProgressStyle(progress: number): any {
  //   return {
  //     width: `${progress}%`,
  //     animation: 'fill-bar 1.5s ease forwards',
  //   };
  // }

  constructor(private el: ElementRef) {}
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (typeof window === 'undefined') return;

    const badgeElement = this.el.nativeElement.querySelector('.badge-container');
    const skillsSection = this.el.nativeElement.querySelector('.skills-section');
    const screenHeight = window.innerHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > this.lastScrollTop) {
      if (badgeElement) {
        const badgePosition = badgeElement.getBoundingClientRect().top;
        if (badgePosition < screenHeight) {
          this.isBadgeVisible = true;
        }
      }
    } else {
      if (badgeElement && badgeElement.classList.contains('visible')) {
        this.isBadgeVisible = false;
      }
    }

    if (skillsSection) {
      const skillsPosition = skillsSection.getBoundingClientRect().top;
      if (skillsPosition < screenHeight) {
        skillsSection.classList.add('visible');
      }
    }

    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }

  openModal(skill: string): void {
    this.selectedSkill = skill;
    switch (skill) {
      case 'Java':
        this.technologies = ['Spring Boot',];
        break;
      case 'Angular':
        this.technologies = ['RxJS', 'NgRx', 'Typescript'];
        break;
      case 'Spring':
        this.technologies = ['Spring Security', 'Spring Boot', 'Spring Cloud', 'JPA', 'Hibernate', 'RESTful', 'Spring Web', 'Thymeleaf', 'RabbitMQ', 'Kafka'];
        break;
      case 'SCSS':
        this.technologies = ['CSS3', 'BEM'];
        break;
      case 'Git':
        this.technologies = [];
        break;
      case 'AWS':
        this.technologies = ['S3', 'EC2', 'Load Balancers', 'VPC', 'Security Groups', 'Route53'];
        break;
    }

    this.isModalVisible = true;
  }

  closeModal(): void {
    this.isModalVisible = false;
  }

  
}
