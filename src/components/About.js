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
      <>
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
                A second-year CSE student at VIT Pune focused on building privacy-aware and locally impactful tech tools.
                Developed “Secure Shield,” a cybersecurity platform to help Indian users detect scam messages, URLs, and files,
                and “Krishi Mitra,” a Hindi-language app supporting farmers with soil testing, weather updates, and market prices.
                Built and deployed multiple projects using React, MUI & Firebase — with frontend hosting via Netlify and
                DNS routing handled through Cloudflare. Recently started contributing to open-source and working on mobile-focused
                solutions and UI clones like a dark-themed calculator.
              </Typography>

            </CardContent>
          </Card>
        </Container>
        <Footer />
      </>
    </AppTheme>
  );
}
