import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.http.get('http://localhost:8080/tasks').subscribe((data: any) => {
      this.tasks = data;
    });
  }
}
