import { FC, ReactElement, useState, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import {
  Typography,
  Box,
  Stack,
  LinearProgress,
  Button,
  Alert,
  AlertTitle,
} from '@mui/material';
import { TaskTitleField } from './_tasktitleField';
import { TaskDesField } from './_taskDesField';
import { TaskDateField } from './_taskDateField';
import { TaskSelectField } from './_taskSelectField';
import { Status } from './enums/Status';
import { Priority } from './enums/Priority';
import { sendApiRequest } from '../../helpers/apirequest';
import { ICreateTask } from '../sidebar/taskArea/interfaces/ICreateTask';
import { format } from 'date-fns';

export const CreateTaskForm: FC = (): ReactElement => {
  const [title, setTitle] = useState<string | undefined>(
    undefined,
  );
  const [description, setDescription] = useState<
    string | undefined
  >();
  const [date, setDate] = useState<Date | null>(new Date());
  const [status, setStatus] = useState<string>(Status.todo);
  const [showSuccess, setShowSuccess] =
    useState<boolean>(false);
  const [priority, setPriority] = useState<string>(
    Priority.normal,
  );
  //create task mutation
  // const queryClient = useQueryClient();

  const createTaskMutation = useMutation({
    mutationFn: (data: ICreateTask) =>
      sendApiRequest(
        'http://localhost:3200/tasks',
        'POST',
        data,
      ),

    onSuccess: (response) => {
      console.log('Task created successfully:', response);
      // queryClient.invalidateQueries(['tasks']);
    },

    onError: (error) => {
      console.error('Error creating task:', error);
    },
  });

  const createTaskHandler = () => {
    if (!title || !date || !description) {
      console.warn('Missing required fields');
      return;
    }

    const task: ICreateTask = {
      title,
      description,
      date: format(new Date(date), "PPP"),
      status,
      priority,
    };

    createTaskMutation.mutate(task);
  };
  useEffect(()=>{
    if(createTaskMutation.isSuccess){
      setShowSuccess(true)
    }
    const successTimeout = setTimeout(()=>{
      setShowSuccess(false)
    }, 7000);
    return()=>{
      clearTimeout(successTimeout)
    }
  },[createTaskMutation.isSuccess])
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
      //   component="form"
      //   sx={{ '& .MuiTextField-root': { m: 1, width: '100%' } }}
      //   noValidate
      //   autoComplete="off"
    >
      {showSuccess && (
        <Alert
          severity="success"
          sx={{ width: '100%', marginBottom: '16px' }}
        >
            <AlertTitle>Success</AlertTitle>
            The task has been created successfully
        </Alert>
      )}
      <Typography mb={2} component="h2" variant="h6">
        Create a task
      </Typography>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <TaskTitleField
          onChange={(e) => setTitle(e.target.value)}
          disabled={createTaskMutation.isPending}
        />
        <TaskDesField
          onChange={(e) => setDescription(e.target.value)}
          disabled={createTaskMutation.isPending}
        />
        <TaskDateField
          value={date}
          onChange={(date) => setDate(date)}
          disabled={createTaskMutation.isPending}
        />
        <Stack
          sx={{ width: '100%' }}
          direction="row"
          spacing={2}
        >
          <TaskSelectField
            label="Status"
            name="status"
            value={status}
            disabled={createTaskMutation.isPending}
            onChange={(e) =>
              setStatus(e.target.value as string)
            }
            items={[
              {
                value: Status.todo,
                label: Status.todo.toUpperCase(),
              },
              {
                value: Status.inProgress,
                label: Status.inProgress.toUpperCase(),
              },
              {
                value: Status.completed,
                label: Status.completed.toUpperCase(),
              },
            ]}
          />
          <TaskSelectField
            label="Priority"
            name="priority"
            value={priority}
            disabled={createTaskMutation.isPending}
            onChange={(e) =>
              setPriority(e.target.value as string)
            }
            items={[
              {
                value: Priority.high,
                label: Priority.high.toUpperCase(),
              },
              {
                value: Priority.normal,
                label: Priority.normal.toUpperCase(),
              },
              {
                value: Priority.low,
                label: Priority.low.toUpperCase(),
              },
            ]}
          />
        </Stack>
        {createTaskMutation.isPending && <LinearProgress />}
        <Button
          disabled={
            !title ||
            !description ||
            !date ||
            !status ||
            !priority
          }
          variant="contained"
          size="large"
          fullWidth
          onClick={createTaskHandler}
        >
           {createTaskMutation.isLoading ? 'Creating...' : 'Create Task'}
        </Button>
      </Stack>
    </Box>
  );
};
