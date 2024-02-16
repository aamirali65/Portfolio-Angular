import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-text-animation',
  templateUrl: './text-animation.component.html',
  styleUrls: ['./text-animation.component.css'],
  animations: [
    trigger('typeAnimation', [
      state('in', style({ width: '100%' })),
      state('out', style({ width: '0%' })),
      transition('in => out', animate('200ms ease-out')),
      transition('out => in', animate('200ms ease-in')),
    ]),
  ],
})
export class TextAnimationComponent implements OnInit {
  texts: string[] = ['Website Designer', 'Graphic Designer', 'Android Developer']; // Add more texts as needed
  currentIndex = 0;
  currentText = '';
  animationState = 'out';

  constructor() {}

  ngOnInit(): void {
    this.animateTextTyping();
  }

  animateTextTyping() {
    this.animationState = 'out'; // Clear the current text
    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.texts.length;
      const nextText = this.texts[this.currentIndex];

      this.typeText(nextText);
    }, 100); // Adjust the delay before clearing the text (in milliseconds) as needed
  }

  typeText(text: string) {
    const textArray = text.split('');
    let index = 0;
    this.currentText = '';

    const interval = setInterval(() => {
      if (index < textArray.length) {
        this.currentText = textArray.slice(0, index + 1).join('');
        index++;
      } else {
        clearInterval(interval);
        this.animationState = 'out'; // Clear the text with backspace
        setTimeout(() => {
          this.backspaceText(textArray);
        }, 100); // Adjust the delay before erasing (in milliseconds) as needed
      }
    }, 100); // Adjust the typing speed (in milliseconds) as needed
  }

  backspaceText(textArray: string[]) {
    let index = textArray.length;

    const interval = setInterval(() => {
      if (index > 0) {
        this.currentText = textArray.slice(0, index - 1).join('');
        index--;
      } else {
        clearInterval(interval);
        this.animationState = 'in'; // Start typing the next text
        setTimeout(() => {
          this.animateTextTyping();
        }, 100); // Adjust the delay before starting the next text (in milliseconds) as needed
      }
    }, 100); // Adjust the erasing speed (in milliseconds) as needed
  }
}
