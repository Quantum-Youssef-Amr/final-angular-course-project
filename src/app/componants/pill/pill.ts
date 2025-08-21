import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pill',
  imports: [],
  templateUrl: './pill.html',
  styleUrl: './pill.css'
})
export class Pill {
  @Input() text!: string;
  @Input() state!: "none" | "green" | "blue" | "yellow";
}
