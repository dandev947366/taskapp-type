import { Task } from './tasks.entity';
import { AppDataSource } from '../../index';
import {
  instanceToPlain,
  plainToInstance,
} from 'class-transformer';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { UpdateResult } from 'typeorm';
class TasksController {
  public async getAll(
    req: Request,
    res: Response,
  ): Promise<any> {
    let allTasks: Task[];
    try {
      allTasks = await AppDataSource.getRepository(
        Task,
      ).find({
        order: { date: 'ASC' },
      });
      allTasks = instanceToPlain(allTasks) as Task[];
      return res.status(200).json(allTasks);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  public async create(
    req: Request,
    res: Response,
  ): Promise<any> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array() });
    }
    // init task
    const newTask = new Task();
    newTask.title = req.body.title;
    newTask.date = req.body.date;
    newTask.description = req.body.description;
    newTask.priority = req.body.priority;
    newTask.status = req.body.status;
    // add task to db
    let createdTask: Task;
    try {
      createdTask = await AppDataSource.getRepository(
        Task,
      ).save(newTask);
      //convert task to object and return it
      res.status(201).json(instanceToPlain(createdTask));
    } catch (error) {
      return res
        .status(500)
        .json({ message: 'Internal Server Error', error });
    }
  }

  public async update(
    req: Request,
    res: Response,
  ): Promise<any> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array() });
    }

    let task: Task | null;
    try {
      // Find if task exists
      task = await AppDataSource.getRepository(
        Task,
      ).findOne({
        where: { id: req.body.id },
      });
      // return 400 if task null
      if (!task) {
        return res.status(404).json({
          error: 'Task with given ID does not exist',
        });
      }
    } catch (error) {
      return res
        .status(500)
        .json({ message: 'Internal Server Error', error });
    }
    // Declare variable for update task
    let updatedTask: UpdateResult;
    // Update task
    try {
      updatedTask = await AppDataSource.getRepository(
        Task,
      ).update(
        req.body.id,
        plainToInstance(Task, {
          status: req.body.status,
        }),
      );
      // Convert update task instance to object
      updatedTask = instanceToPlain(
        updatedTask,
      ) as UpdateResult;
      return res.status(200).json(updatedTask).status(200);
    } catch (error) {
      return res
        .status(500)
        .json({ message: 'Internal Server Error', error });
    }
  }
}

export const taskController = new TasksController();
