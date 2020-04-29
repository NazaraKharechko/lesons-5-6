import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input()
  todo: Todo[];
  status: boolean;
  constructor() {
    console.log(this.status);
  }

  ngOnInit(): void {
  }

}
