import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() label?: string;
  @Input() imgSrc?: string;
  @Input() inputType?: string;
  @Input() value?: string;
}
