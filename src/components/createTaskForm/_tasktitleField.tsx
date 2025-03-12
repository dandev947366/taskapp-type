import {FC, ReactElement} from 'react'
import { TextField } from '@mui/material'
import { ITextField } from './interfaces/ITextField'
export const TaskTitleField:FC<ITextField> = (props): ReactElement => {
    const {
        onChange = (e) => console.log(e), 
        disabled = false
        } = props
    return(
        <>
        <TextField 
            id='title'
            label='Title'
            placeholder='Title'
            variant='outlined'
            size='small'
            name='title'
            fullWidth
            disabled={disabled}
            onChange={onChange}
        />
        </>
    )

}