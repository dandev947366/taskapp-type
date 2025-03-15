import { ReactElement, FC } from 'react';
import { Box } from '@mui/material';
import { TaskHeader } from './_taskHeader';
import { TaskDescription } from './_taskDescription';
import { TaskFooter } from './_taskFooter';
import { renderBoderColor } from './helpers/renderBorderColor';
import { ITask } from './interfaces/ITask';
export const Task: FC<ITask> = (props): ReactElement => {
  const {
    title,
    date ,
    description,
    priority,
    status,
    onStatusChange,
    onClick,
    id,
  } = props;

  return (
    <Box
      // display="center"
      // width="100%"
      // justifyContent="center"
      // flexDirection="column"
      mb={4}
      ml={10}
      mr={10}
      p={2}
      sx={{
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: renderBoderColor(priority),
      }}
    >
      <TaskHeader title={title} date={date} />
      <TaskDescription description={description} />
      <TaskFooter
        status={status}
        id={id}
        onStatusChange={onStatusChange}
        onClick={onClick}
      />
    </Box>
  );
};
