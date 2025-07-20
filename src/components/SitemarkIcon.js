import Avatar from '@mui/material/Avatar';
import pfp from './pfp.png'; // Import the image

export default function SitemarkIcon() {
  return (
    <Avatar
      alt="Riddhesh Ture"
      src={pfp} // Use the imported image
      sx={{ width: 32, height: 32, mr: 2, alignSelf: 'center' }}
    />
  );
}
