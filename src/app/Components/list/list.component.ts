import { TaskService } from './../../Service/task.service';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  constructor(private TaskService: TaskService) {}
  tasks: any;

  ngOnInit() {
    this.getTask();
  }
  getTask() {
    this.TaskService.getTasks().subscribe((result) => {
      console.log(result);
      this.tasks = result;
    });
  }
}
