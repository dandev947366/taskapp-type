import { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { ITaskCounter } from './interfaces/ITaskCounter';
import { Status } from '../createTaskForm/enums/Status';
import {emitBorderColor} from "./helpers/emitColorBorder"
import { emitLabel } from './helpers/emitLabel';
export const TaskCounter: FC<ITaskCounter> = (props): ReactElement => {
    const {
        counter,
        status
    } = props
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
            sx={{
                backgroundColor: 'transparent',
                border: '5px solid',
                width: '96px',
                height: '96px',
                marginBottom: '16px',
                borderColor: `${emitBorderColor(status)}`
            }}
        
        >
            <Typography color="#ffffff" variant="h4">{counter}</Typography>
        </Avatar>
        <Typography
            color="#ffffff"
            fontWeight="bold"
            fontSize="20px"
            variant="h5"
        >{emitLabel(status)}</Typography>
      </Box>
    </>
  );
};
