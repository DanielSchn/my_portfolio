import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @ViewChild('contactMe') contactMe!: ElementRef;

  ngAfterViewInit() {
    this.initScrollAnimation();
  }

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
    agreeToPrivacyPolicy: false,
  };

  mailTest = false;
  showSubmitMessage: any = false;

  post = {
    endPoint: 'https://dschneider-dev.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {    // Am ende muss dieser mailTest weg oder oben mailTest auf false
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.showMessage();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) { // Am ende muss dieser else if teil weg oder oben mailTest auf false
      ngForm.resetForm();
      this.showMessage();
    }
  }

  showMessage() {
    this.showSubmitMessage = true;
    setTimeout(() => {
      this.showSubmitMessage = false;
    }, 3000);
  }

  initScrollAnimation() {
    const contactElement = this.contactMe.nativeElement;

    gsap.from(contactElement, {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: contactElement,
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });
  }
}
