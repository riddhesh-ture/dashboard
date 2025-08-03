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
  description: 'I am a passionate software engineer with expertise in building modern web applications. I enjoy working with React, Node.js, and exploring new technologies. This dashboard is a showcase of my work and skills.',
  avatar: pfp
};

const projects = [
  {
    title: 'ASEP 1',
    description: 'An academic project focused on advanced software engineering principles.',
    link: 'https://asep1.riddheshture.me',
    img: asep1,
    
  },
  {
    title: 'ASEP 2',
    description: 'A follow-up project demonstrating further skills in software engineering.',
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
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {/* Bio Section */}
          <Card variant="outlined" sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
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
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {project.description}
                      </Typography>
                    </CardContent>
                  </SyledCard>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Footer />
    </AppTheme>
  );
}
