import {FC, ReactElement} from 'react'
import { TextField } from '@mui/material'
import { ITextField } from './interfaces/ITextField'

export const TaskDesField:FC<ITextField> = (props): ReactElement => {
    const {
        onChange = (e) => console.log(e), 
        disabled=false
    } = props
    return(
        <>
            <TextField
                id='description'
                label='Description'
                placeholder='Description'
                variant='outlined'
                size='small'
                multiline
                rows={4}
                name='title'
                fullWidth
                onChange={onChange}
                disabled={disabled}
            />
        </>
    )

}