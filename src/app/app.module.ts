import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SizePipe } from './pipe && directive/size.pipe';
import { RedDirective } from './pipe && directive/red.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    SizePipe,
    RedDirective,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
