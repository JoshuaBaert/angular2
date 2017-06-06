import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  styleUrls: ['./button.component.scss'],
  template: `
  <button 
    class="btn btn-primary" 
    [style.backgroundColor]="isTrue ? 'blue' : ''"
  >Submit</button>
    
    <button (click)="onClick($event, false)">False</button>
    <button (click)="onClick($event, true)">True</button>
    
    <br>
    
    <p>
      <input type="text" [value]="title" (input)="title = $event.target.value"/> <br>
      <input type="text" [(ngModel)]="title"> <br>
      <button (click)="title = ''">Clear</button>
      {{title}}
    </p>
  `
})
export class ButtonComponent implements OnInit {
  title = 'Angular App';
  isTrue;

  onClick($event, boo) {
    $event.stopPropagation();
    this.isTrue = boo;
  }

  constructor() { }

  ngOnInit() {
  }

}
