import { Priority } from '../enums/Priority';
import { Status } from '../enums/Status';
import { body, ValidationChain } from 'express-validator';
export const createValidator: ValidationChain[] = [
  body('title')
    .not()
    .isEmpty()
    .withMessage('The task title mandatory')
    .trim()
    .isString()
    .withMessage('Title must be text format'),
  body('date')
    .not()
    .isEmpty()
    .withMessage('The task date is mandatory')
    .isString()
    .withMessage('Date must be a valid date format'),
  body('description')
    .trim()
    .isString()
    .withMessage('Description must be a valid text format'),
  body('priority')
    .trim()
    .isIn([Priority.normal, Priority.high, Priority.low])
    .withMessage(
      'Priority can only be normal, high, or low',
    ),
  body('status')
    .trim()
    .isIn([
      Status.todo,
      Status.inProgress,
      Status.completed,
    ])
    .withMessage(
      'Status can only be todo, inProgress, or completed',
    ),
];

export const updateValidator = [
  body('id')
    .not()
    .isEmpty()
    .withMessage('The task id is mandatory')
    .trim()
    .isString()
    .withMessage('ID needs to be a valid uuid format'),
  body('status')
    .trim()
    .isIn([
      Status.todo,
      Status.inProgress,
      Status.completed,
    ])
    .withMessage(
      'Status can only be todo, inProgress, or completed',
    ),
];
