import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { ListComponent } from './Components/list/list.component';
import { FormComponent } from './Components/form/form.component';
import { TaskService } from './Service/task.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    ListComponent,
    FormComponent,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  tasks: any;
  constructor(private TaskService: TaskService) {}
  ngOnInit() {
    this.getTask();
  }

  getTask() {
    this.TaskService.getTasks().subscribe((result) => {
      console.log(result);
      this.tasks = result;
    });
  }
  trackByFunc(index: number, task: any): number {
    return task.id; // or unique identifier for the item
  }
}
