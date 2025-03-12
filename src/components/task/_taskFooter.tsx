import { Button, Box } from '@mui/material';
import { ReactElement, FC } from 'react';
import { ITaskFooter } from './interfaces/ITaskFooter';
// import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export const TaskFooter: FC<ITaskFooter> = (
  props
): ReactElement => {
    const { 
        onStatusChange=(e)=>console.log(e),
        onClick=(e)=>console.log(e)
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
          control={<Switch
          onChange={(e)=>onStatusChange(e)}
          color='warning' />}
          label="In Progress"
        />
        <Button
            variant='contained'
            color='success'
            size='small'
            sx={{color: '#ffffff'}}
            onClick={(e)=>onClick(e)}
        >Mark Complete</Button>
      {/* </FormGroup> */}
    </Box>
  );
};
