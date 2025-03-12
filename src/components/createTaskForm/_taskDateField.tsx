import { FC, ReactElement } from 'react';
import dayjs from 'dayjs';
import { IDateField } from './interfaces/IDateField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box } from '@mui/material';

export const TaskDateField: FC<IDateField> = (props): ReactElement => {
    const {
        value = new Date(), // Default to current date
        disabled = false, 
        onChange = (date) => console.log(date),
    } = props;

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box display="flex" flexDirection="column" gap={2}>
                <DatePicker
                    label="Task date"
                    value={dayjs(value)} 
                    onChange={(newValue) => onChange(newValue?.toDate())} 
                    disabled={disabled}
                />
            </Box>
        </LocalizationProvider>
    );
};
