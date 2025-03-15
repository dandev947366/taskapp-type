import { Button, Box } from '@mui/material';
import { ReactElement, FC } from 'react';
import { ITaskFooter } from './interfaces/ITaskFooter';
// import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Status } from '../createTaskForm/enums/Status';

export const TaskFooter: FC<ITaskFooter> = (
  props
): ReactElement => {
    const { 
        id,
        status,
        onStatusChange,
        onClick
    } = props;
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="space-between"
      mt={3}
    >
      {/* <FormGroup> */}
        <FormControlLabel
          label="In Progress"
          control={
            <Switch
              onChange={(e) => onStatusChange(e, id)}
              color='warning'
              defaultChecked={status===Status.inProgress}
            />}
        />
        <Button
            variant='contained'
            color='success'
            size='small'
            sx={{color: '#ffffff'}}
            onClick={(e) => onClick(e, id)}
        >Mark Complete</Button>
      {/* </FormGroup> */}
    </Box>
  );
};
