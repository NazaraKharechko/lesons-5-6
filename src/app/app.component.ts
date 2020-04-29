import {Component, Input} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Todo} from './Todo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lessons5';
  data = Date.now();
  classStatus: boolean;
  forms: FormGroup;
  @Input()
  todos: Todo[] = [];
  // password: FormControl  = new FormControl('2018' , [Validators.required, Validators.pattern('[a-zA-Z]{6,}')]);
  constructor(private formBuilder: FormBuilder) {
    this.forms = formBuilder.group({
      login: ['' , [Validators.required, Validators.pattern('[a-zA-Z]{6,}')]],
      password: ['Nazik', [Validators.required, Validators.pattern('[a-zA-Z]{6,}')] ],
      id: ['', [Validators.required]],
      type: ['', [Validators.required]],
      body: ['', [Validators.required]],
      title: ['', [Validators.required]],
    });
  }

  darcktem() {
  this.classStatus = !this.classStatus;
  }

  castrate(forms: FormGroup) {
    console.log(forms);
  }

  save(forms: FormGroup) {
    console.log(forms.value);
    this.todos.push(forms.value);
    const id = this.forms.value.id;
    localStorage.setItem('id' , id);

    const type = this.forms.value.type;
    localStorage.setItem('type' , type);

    const body = this.forms.value.body;
    localStorage.setItem('body' , body);

    const title = this.forms.value.title;
    localStorage.setItem('title' , title);
  }
}
