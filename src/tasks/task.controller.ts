import { Controller,Delete,Get, Patch, Post, Put,Body, Query, Param, HttpStatus, ParseIntPipe, ParseBoolPipe, BadRequestException } from "@nestjs/common";
import { TaskService } from "./task.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

@Controller('tasks')

export class TaskController{



constructor(private readonly taskService: TaskService){}

@Get()
getAllTasks(@Query() query:any){
    console.log(query);
  return  this.taskService.getTasks();
}

@Get('/:id')
getTaskById(@Param('id', ParseIntPipe) id:number){
  return  this.taskService.getTaskById(id);
}


@Post()
CreateTask(@Body() task: CreateTaskDto){
    console.log(task);
  return  this.taskService.CreateTask(task);
}


@Put()
EditTask(@Body() task: UpdateTaskDto){
  return  this.taskService.EditTask(task);
}


@Delete()
DeleteTask(){
  return  this.taskService.DeleteTask();
}


@Patch()
updateTaskStatus(){
    return this.taskService.updateTaskStatus();
}








}