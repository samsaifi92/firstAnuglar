import { FormsModule } from '@angular/forms';
import { TaskService } from './../../Service/task.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  constructor(private TaskService: TaskService) {}

  searchText: string = '';

  setSearchText() {
    this.TaskService.setSearchText(this.searchText).subscribe((data) => {
      return data;
    });
    this.searchText = '';
  }
}
