import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private url = 'http://localhost:3000/task';
  constructor(private httpClient: HttpClient) {}

  getTasks() {
    return this.httpClient.get(this.url);
  }
  setSearchText(data: string) {
    return this.httpClient.post(this.url, { title: data });
  }

  deleteTask(data: any) {
    return this.httpClient.delete(this.url + '/' + data);
  }
}
