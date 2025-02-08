import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../../../environments/environment.prod';


@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  formData = {
    name: '',
    email: '',
    message: '',
  };

  environment = environment;

  isSending = false;
  isSuccess = false;
  isError = false;

  constructor(private http: HttpClient) { }

  onSubmit() {
    this.isSending = true;
    this.isSuccess = false;
    this.isError = false;

    const messageFormat = {
      name: this.formData.name,
      message: `Olá Eric,\n
    eu me chamo ${this.formData.name},\n
     ${this.formData.message} \n
    meu email para contato: ${this.formData.email}`
    };



    emailjs.send(
      environment.emailjs.EMAILJS_SERVICE_ID,
      environment.emailjs.EMAILJS_TEMPLATE_ID,
      messageFormat,
      environment.emailjs.EMAILJS_USER_ID
    ).then(
      (response) => {
        this.isSending = false;
        this.isSuccess = true;
        this.resetForm();
      },
      (error) => {
        console.log(error)
        this.isSending = false;
        this.isError = true;
      }
    );
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      message: '',
    };
  }
}
