import Grid from '@mui/material/Grid2';
import { Box, Alert, LinearProgress } from '@mui/material';
import { FC, ReactElement } from 'react';
import { format } from 'date-fns';
import { TaskCounter } from '../../taskCounter/taskCounter';
import { Task } from '../../task/task';
import {
  useQuery,
  useMutation,
} from '@tanstack/react-query';
import { sendApiRequest } from '../../../helpers/apirequest';
import { ITaskApi } from './interfaces/ITaskApi';
import { Status } from '../../createTaskForm/enums/Status';
import { IUpdateTask } from '../../createTaskForm/interfaces/IUpdateTask';
import { countTasks } from './helpers/countTasks';
export const TaskArea: FC = (): ReactElement => {
  // Fetch tasks using useQuery
  const { error, isLoading, data } = useQuery<ITaskApi[]>({
    queryKey: ['tasks'],
    queryFn: async (): Promise<ITaskApi[]> =>
      sendApiRequest<ITaskApi[]>(
        'http://localhost:3200/tasks',
        'GET',
        undefined,
      ),
  });
  const updateTaskMutation = useMutation(
    (data: IUpdateTask) =>
      sendApiRequest(
        'http://localhost:3200/tasks',
        'PUT',
        data,
      ),
  );

  function onStatusChangeHandler(e, id: string) {
    updateTaskMutation.mutate({
      id,
      status: e.target.checked
        ? Status.inProgress
        : Status.todo,
    });
  }
  function markCompleteHandler(
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) {
    updateTaskMutation.mutate({
      id,
      status: Status.completed,
    });
  }
  return (
    <>
      <Grid size={{ xs: 12, md: 8 }} px={4}>
        <Box mb={8} px={4}>
          <h2>
            Status Of Your Tasks As On{' '}
            {format(new Date(), 'PPPP')}
          </h2>
        </Box>
        <Grid
          container
          direction="column"
          justifyContent="center"
        >
          <Grid
            direction="row"
            item
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            md={10}
            xs={12}
            mb={8}
          >
            <TaskCounter 
              // counter={data ? countTasks(data,Status.todo): undefined}
              status={Status.todo}/>
            <TaskCounter 
              // counter={data ? countTasks(data,Status.inProgress): undefined}
              status={Status.inProgress}/>
            <TaskCounter 
              // counter={data ? countTasks(data,Status.completed): undefined}
              status={Status.completed}/>
          </Grid>
          <Grid
            direction="row"
            item
            display="column"
            justifyContent="space-around"
            alignItems="center"
            md={10}
            xs={12}
            mb={8}
          >
            {/* Show loading indicator while fetching */}
            {isLoading && <LinearProgress />}
            {/* Show error message if there's an error */}
            {error && (
              <Alert severity="error">
                There was an error fetching your tasks
              </Alert>
            )}
            {/* Show message if no tasks are available */}
            {!isLoading &&
              !error &&
              Array.isArray(data) &&
              data.length === 0 && (
                <Alert severity="warning">
                  You do not have any tasks created yet.
                  Start by creating a task.
                </Alert>
              )}
          </Grid>
          {Array.isArray(data) && data.length > 0 ? (
            data.map((task, index) => {
              console.log('Task item:', task.date); // Debugging
              return task.status === Status.todo ||
                task.status === Status.inProgress ? (
                <Task
                  key={index + task.priority}
                  id={task.id}
                  title={task.title}
                  description={task.description}
                  date={task.date}
                  priority={task.priority}
                  status={task.status}
                  onClick={markCompleteHandler}
                  onStatusChange={onStatusChangeHandler}
                />
              ) : null;
            })
          ) : (
            <Alert severity="warning">
              No tasks available.
            </Alert>
          )}
        </Grid>
      </Grid>
    </>
  );
};
