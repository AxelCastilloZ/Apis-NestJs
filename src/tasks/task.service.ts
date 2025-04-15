import {Injectable, NotFoundException} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()

export class TaskService{

    private tasks: any[] = [];

getTasks(){
    return this.tasks;
}

getTaskById(id:number){
    const taskFound = this.tasks.find(task=>task.id===id);
    if(!taskFound){
        return new NotFoundException('No se encontro la tarea');
    }
    return taskFound;

}



CreateTask(task:CreateTaskDto){
    this.tasks.push({
        ...task,
        id:this.tasks.length+1,
});
  return  task;
}



EditTask(task: UpdateTaskDto){
    console.log(task)
  return  'Editando tarea';
}



DeleteTask(){
  return  'Eliminando tarea';
}



updateTaskStatus(){
    return 'actualizando estado de tarea';
}




}

