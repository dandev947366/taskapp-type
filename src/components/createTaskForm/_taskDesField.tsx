import {FC, ReactElement} from 'react'
import { TextField } from '@mui/material'
export const TaskDesField:FC = (): ReactElement => {
    return(
        <>
            <TextField
                id='description'
                label='Task Description'
                placeholder='Task Description'
                variant='outlined'
                size='small'
                multiline
                rows={4}
                name='title'
                fullWidth
            />
        </>
    )

}