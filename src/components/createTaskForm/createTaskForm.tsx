import { FC, ReactElement } from 'react';
import { Typography, Box, Stack } from '@mui/material';
import { TaskTitleField } from './_tasktitleField';
import { TaskDesField } from './_taskDesField';
export const CreateTaskForm: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      <Typography mb={2} component="h2" variant="h6">
        Create a task
      </Typography>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <TaskTitleField />
        <TaskDesField />
      </Stack>
    </Box>
  );
};
