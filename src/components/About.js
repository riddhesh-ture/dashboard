import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AppTheme from '../shared-theme/AppTheme';
import Footer from './Footer';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { styled } from '@mui/material/styles';

const AboutContainer = styled(Container)(({ theme }) => ({
  minHeight: '100dvh',
  padding: theme.spacing(2),
  paddingTop: theme.spacing(12),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
    paddingTop: theme.spacing(12),
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'fixed',
    zIndex: -1,
    inset: 0,
    backgroundImage:
      'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage:
        'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}));

export default function About(props) {
  return (
    <AppTheme {...props}>
      <>
        <CssBaseline enableColorScheme />
        <AboutContainer
          maxWidth="lg"
          component="main"
          sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}
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
                I am eager to apply my skills in real-world projects and contribute to innovative solutions.
              </Typography>
            </CardContent>
          </Card>
        </AboutContainer>
        <Footer />
      </>
    </AppTheme>
  );
}
