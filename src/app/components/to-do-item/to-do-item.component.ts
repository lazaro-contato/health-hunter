import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss'],
})
export class ToDoItemComponent  implements OnInit {
  @Input() todoTitle!: string;

  constructor() { }

  ngOnInit() {}

}
