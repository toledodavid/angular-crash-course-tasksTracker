import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';
import { Task } from '../../interfaces/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTaskEvent: EventEmitter<Task> = new EventEmitter();

  text:string = '';
  day:string = '';
  reminder:boolean = false;

  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiService:UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.text) {
      alert('Please add a task');
      return;
    }

    const newTask:Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTaskEvent.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }

}
