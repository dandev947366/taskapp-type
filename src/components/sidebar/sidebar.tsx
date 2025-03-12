import {FC, ReactElement} from 'react'
import Grid from '@mui/material/Grid2'
import { Profile } from '../profile/profile'
import { CreateTaskForm } from '../createTaskForm/createTaskForm'
export const Sidebar:FC = (): ReactElement => {
  return (
  <>
    <Grid
        container
        size={{ xs: 12, md: 4 }} 
        direction="column"
        sx={{
          backgroundColor:'background.paper',
          justifyContent:'center',
          alignItems: "center",
    }}>
    
        <Profile name='Dan'/>
        <CreateTaskForm  />
    </Grid>
    </>
  )
}
