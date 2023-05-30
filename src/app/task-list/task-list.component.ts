import { Component } from '@angular/core';
import { timer } from 'rxjs';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {


  title = "List of My Tasks"
  cTasks: string[] =[]
  tasks = [
    { title: " Respond to emails",done:false},
    { title: "Exercise for 30 minutes",done:false },
    { title: "Finish report for project X",done:false},
  ]

  done : boolean =false

  task ={
    title : "",
    done: false
  }




// completedTasks(ind : any){
//   this.done= true
//   this.tasks = this.tasks.filter((task, currentIndex)=> ind != currentIndex)
//   this.done=false
// }

// onTaskChecked(index: number) {
//   timer:5000
//   const cTask = this.tasks.splice(index, 1)[0]
//   this.cTasks.push(cTask.title)
//   }
  onTaskChecked(index: number) {
    const cTask = this.tasks[index];
    setTimeout(() => {
      this.tasks.splice(index, 1);
      this.cTasks.push(cTask.title);
    }, 500);
  }
  addTask(){

    if (!this.task.title) {

      Swal.fire(
      'Field is empty?',
      'Please check your input?',
      'question'
      )
      return
      }
        this.tasks = [this.task,...this.tasks]
        this.task ={
          title: "",
          done: false
        }



  }









}


