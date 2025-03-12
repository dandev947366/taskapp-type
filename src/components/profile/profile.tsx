import { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

interface IProfile {
  name?: string;
}

export const Profile: FC<IProfile> = ({ name = 'John' }): ReactElement => {
  return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // Ensures Avatar and text are centered
          textAlign: 'center',
          // marginTop: '10px'
        }}
      >
        <Avatar
          sx={{
            width: 96,
            height: 96,
            backgroundColor: 'primary.main',
            marginBottom: 2, // Adds spacing
          }}
        >
          <Typography variant="h4" color="text.primary">
            {name.charAt(0)}
          </Typography>
        </Avatar>
        <Typography variant="h6" color="text.primary">
          {`Welcome, ${name}`}
        </Typography>
        <Typography variant="body1" color="text.primary">
          This is your personal task manager
        </Typography>
      </Box>
  );
};

Profile.propTypes = {
  name: PropTypes.string,
};
