import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostListener, ViewChild, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    TranslateModule,
    RouterModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @ViewChild('contactMe') contactMe!: ElementRef;


  ngAfterViewInit() {
    this.initAnimations();
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
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
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
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
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
        start: "top 90%",
        end: "bottom 15%",
        toggleActions: "play pause restart reset",
        onLeave: () => gsap.to(contactElement, { autoAlpha: 0 }),
        onEnterBack: () => gsap.to(contactElement, { autoAlpha: 1 })
      }
    });
  }


  initAnimations() {
    if (this.shouldInitAnimation()) {
      this.initScrollAnimation();
    } else {
      this.resetAnimations();
    }
  }


  shouldInitAnimation(): boolean {
    const screenWidth = window.innerWidth;
    return screenWidth > 650;
  }


  resetAnimations() {
    if (this.contactMe) {
      gsap.killTweensOf(this.contactMe.nativeElement);
      gsap.set(this.contactMe.nativeElement, { clearProps: "all" });
    }
  }

  
  scrollUp() {
    window.scrollTo(0, 0);
  }


  @HostListener('window:resize')
  onResize() {
    this.initAnimations();
  }
}
