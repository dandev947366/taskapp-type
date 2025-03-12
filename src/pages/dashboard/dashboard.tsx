import {FC, ReactElement} from 'react'
import {Grid2} from '@mui/material'
import {Sidebar} from '../../components/sidebar/sidebar';
import {TaskArea} from '../../components/sidebar/taskArea/taskArea';

export const Dashboard: FC = (): ReactElement => {
    return (
        <Grid2 container minHeight="100vh" p={0} m={0}>
            <TaskArea />
            <Sidebar />
        </Grid2>
    )
}