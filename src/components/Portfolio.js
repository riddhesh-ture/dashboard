import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppTheme from '../shared-theme/AppTheme';
import Footer from './Footer';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import pfp from './pfp.png';
import asep1 from './asep1.png';
import asep2 from './asep2.png';
import calimg from './calimg.png';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const PortfolioContainer = styled(Container)(({ theme }) => ({
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

const SyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  height: '100%',
  backgroundColor: (theme.vars || theme).palette.background.paper,
  '&:hover': {
    boxShadow: theme.shadows[4],
    cursor: 'pointer',
  },
}));

const bio = {
  name: 'Riddhesh Ture',
  description: (
    <>
      👨‍💻 Computer Science student passionate about modern web development.<br />
      🚀 This website highlights projects I’ve built using React, MUI, and other tools I’m exploring.
    </>
  ),
  avatar: pfp
};

const projects = [
  {
    title: 'ASEP 1 – Krishi Mitra',
    description: 'A Hindi-language farming assistant providing soil testing guidance, live weather forecasts, and market price updates.',
    link: 'https://asep1.riddheshture.me',
    img: asep1,
  },
  {
    title: 'ASEP 2 – Secure Shield',
    description: 'A cybersecurity tool that checks SMS, URLs, and files for scams using VirusTotal, Google Safe Browsing, and HaveIBeenPwned.',
    link: 'https://asep2.riddheshture.me',
    img: asep2,
  },
  {
    title: 'Cute Cal',
    description: 'A charming and user-friendly calculator application.',
    link: 'https://cute-cal.netlify.app',
    img: calimg,
  },
];

export default function Portfolio(props) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <PortfolioContainer
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}
      >
        <Alert severity="info">
          <AlertTitle>Under Construction</AlertTitle>
          This website is a work in progress. New features and content are being
          added!
        </Alert>

        {/* Bio Section */}
        <Card id="about-me" variant="outlined" sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2, scrollMarginTop: '128px' }}>
          <Avatar alt={bio.name} src={bio.avatar} sx={{ width: 80, height: 80 }} />
          <Box>
            <Typography variant="h4" component="h1" gutterBottom>
              {bio.name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {bio.description}
            </Typography>
          </Box>
        </Card>

        {/* Projects Section */}
        <Box id="projects" sx={{ scrollMarginTop: '128px' }}>
          <Typography variant="h2" gutterBottom>
            Projects
          </Typography>
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Link href={project.link} target="_blank" underline="none">
                  <SyledCard variant="outlined">
                    <CardMedia
                      component="img"
                      image={project.img}
                      alt={project.title}
                      sx={{ aspectRatio: '16 / 9' }}
                    />
                    <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ fontWeight: 'medium' }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ lineHeight: 1.6 }}
                      >
                        {project.description}
                      </Typography>
                    </CardContent>
                  </SyledCard>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </PortfolioContainer>
      <Footer />
    </AppTheme>
  );
}
