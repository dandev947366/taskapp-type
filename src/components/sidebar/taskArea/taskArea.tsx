import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import { FC, ReactElement } from 'react';
import { format } from 'date-fns';
import { TaskCounter } from '../../taskCounter/taskCounter';
import { Task } from '../../task/task';
export const TaskArea: FC = (): ReactElement => {
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
          // display="flex"
          direction='column'
          justifyContent="center"
        >
          <Grid
            direction='row'
            item
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            md={10}
            xs={12}
            mb={8}
          >
          <TaskCounter  />
          <TaskCounter  />
          <TaskCounter  />
          </Grid>
          <Grid 
            direction='row'
            item
            display="column"
            justifyContent="space-around"
            alignItems="center"
            md={10}
            xs={12}
            mb={8}
          >
            <Task  />
            <Task  />
            <Task  />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
