import {FC, ReactElement} from 'react'
import { TextField } from '@mui/material'
export const TaskTitleField:FC = (): ReactElement => {
    return(
        <>
        <TextField 
            id='title'
            label='Task Title'
            placeholder='Task Title'
            variant='outlined'
            size='small'
            name='title'
            fullWidth
        />
        </>
    )

}