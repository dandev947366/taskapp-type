import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import { FC, ReactElement } from 'react';
import { format } from 'date-fns';
import { TaskCounter } from '../../taskCounter/taskCounter';
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
          display="column"
          direction='column'
          justifyContent="center"
        >
          <Grid
            direction='row'
            item
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            size="grow"
            md={10}
            xs={12}
            mb={8}
          >
          <TaskCounter  />
          <TaskCounter  />
          <TaskCounter  />
          </Grid>
          <Grid 
            item
            direction='column'
            display="flex"
            justifyContent="center"
            alignItems="center"
            size="grow"
            md={10}
            xs={12}
            mb={8}
          >
            <Box>Task Will Come Over Here</Box>
            <Box>Task Will Come Over Here</Box>
            <Box>Task Will Come Over Here</Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
