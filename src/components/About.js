import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AppTheme from '../shared-theme/AppTheme';
import Footer from './Footer';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export default function About(props) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
      >
        <Alert severity="info">
          <AlertTitle>Under Construction</AlertTitle>
          This website is a work in progress. New features and content are being
          added!
        </Alert>
        <Card variant="outlined">
            <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                    About Me
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    I'm a second-year CSE student at VIT Pune with a hands-on approach to learning through real-world projects. 
                    I've built full-stack apps like a privacy-focused spam detection platform and a farmer support site with 
                    live weather insights. I enjoy working on end-to-end features — from frontend interfaces to backend logic and deployment. 
                    Recently, I made a small contribution to the open-source LocalSend project, where I added a UI improvement (a button feature), 
                    and I'm looking forward to contributing more. Outside academics, I like exploring emerging tech, setting up DNS/domains, and 
                    experimenting with tools like Flutter, React, Firebase, and MySQL.
                </Typography>
            </CardContent>
        </Card>
      </Container>
      <Footer />
    </AppTheme>
  );
}
