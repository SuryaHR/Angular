import { NUMBER_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  inputTask: string = "";

  taskList: string[] = [];
  index: number = -1;

  constructor() { }

  ngOnInit(): void {
  }

  addTask() {
    if(this.inputTask.length == 0){
      return;
    }
    else if(this.index == -1){
      this.taskList.push(this.inputTask);
    }else{
      this.taskList[this.index] = this.inputTask;
    this.index = -1;
    }
    this.inputTask = "";
  }

  deleteTask(i:number) {
    this.taskList.splice(i,1);
  }

  editTask(i: number) {
    this.index = i;
    this.inputTask = this.taskList[i];
  }


}
