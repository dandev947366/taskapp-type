import Grid2 from '@mui/material/Grid2';
import { FC, ReactElement } from 'react';
export const TaskArea: FC = (): ReactElement => {
  return (
  <>
    <Grid2 size={{ xs: 12, md: 8 }} px={4}>
      <h2>Content Area</h2>
    </Grid2>
    </>
  );
};

