import { FC, ReactElement } from 'react';
import { Typography, Box, Stack } from '@mui/material';
import { TaskTitleField } from './_tasktitleField';
import { TaskDesField } from './_taskDesField';
import { TaskDateField } from './_taskDateField';
import { TaskSelectField } from './_taskSelectField';
import {Status} from './enums/Status'
import { Priority } from './enums/Priority';
export const CreateTaskForm: FC = (): ReactElement => {
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
      <Typography mb={2} component="h2" variant="h6">
        Create a task
      </Typography>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <TaskTitleField />
        <TaskDesField />
        <TaskDateField  />
        <Stack sx={{ width: '100%' }} direction='row' spacing={2}>
        <TaskSelectField label="Status" name="status"
          items={[
            {
              value: Status.todo,
              label: Status.todo.toUpperCase()
            },
            {
              value: Status.inProgress,
              label: Status.inProgress.toUpperCase()
            },
            {
              value: Status.completed,
              label: Status.completed.toUpperCase()
            }
          ]}
        />
        <TaskSelectField label="Priority" name="priority"
          items={[
            {
              value: Priority.high,
              label: Priority.high.toUpperCase()
            },
            {
              value: Priority.normal,
              label: Priority.normal.toUpperCase()
            },
            {
              value: Priority.low,
              label: Priority.low.toUpperCase()
            }
          ]}
        />
        
      </Stack>
      </Stack>
    </Box>
  );
};
