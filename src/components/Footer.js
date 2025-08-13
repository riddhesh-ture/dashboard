import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
      {'Copyright © '}
      <Link color="text.secondary" href="https://riddheshture.me">
        riddheshture
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <React.Fragment>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 4, sm: 8 },
          py: { xs: 4, sm: 5 },
          textAlign: { sm: 'center', md: 'left' },
        }}
      >
       {/*   <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            width: '100%',
            justifyContent: 'space-between',
          }}
        ></Box> */}
          {/* <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              minWidth: { xs: '100%', sm: '60%' },
            }}
          >
            <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
              <SitemarkIcon />
              <Typography
                variant="body2"
                gutterBottom
                sx={{ fontWeight: 600, mt: 2 }}
              >
                Join the newsletter
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                Subscribe for weekly updates. No spams ever!
              </Typography>
              <InputLabel htmlFor="email-newsletter">Email</InputLabel>
              <Stack direction="row" spacing={1} useFlexGap>
                <TextField
                  id="email-newsletter"
                  hiddenLabel
                  size="small"
                  variant="outlined"
                  fullWidth
                  aria-label="Enter your email address"
                  placeholder="Your email address"
                  slotProps={{
                    htmlInput: {
                      autoComplete: 'off',
                      'aria-label': 'Enter your email address',
                    },
                  }}
                  sx={{ width: '250px' }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{ flexShrink: 0 }}
                >
                  Subscribe
                </Button>
              </Stack>
            </Box>
          </Box> */}
           
          
           {/* <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
              Projects
            </Typography>
            <Link color="text.secondary" variant="body2" href="https://asep1.riddheshture.me">
              ASEP 1
            </Link>
            <Link color="text.secondary" variant="body2" href="https://asep2.riddheshture.me">
              ASEP 2
            </Link>
            <Link color="text.secondary" variant="body2" href="https://cute-cal.netlify.app">
              Cute Cal
            </Link>
            <Link color="text.secondary" variant="body2" href="#">
              Pricing
            </Link>
            <Link color="text.secondary" variant="body2" href="#">
              FAQs
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              gap: 1,
            }}
          >
             <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
              About Me
            </Typography>
            <Link color="text.secondary" variant="body2" href="#">
              LinkedIn
            </Link>
            <Link color="text.secondary" variant="body2" href="#">
              GitHub
            </Link> 
             <Link color="text.secondary" variant="body2" href="#">
              Press
            </Link> 
          </Box>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              gap: 1,
            }}
          >
            {/* <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
              Legal
            </Typography>
            <Link color="text.secondary" variant="body2" href="#">
              Terms
            </Link>
            <Link color="text.secondary" variant="body2" href="#">
              Privacy
            </Link>
            <Link color="text.secondary" variant="body2" href="mailto:riddheshture@proton.me">
              Contact
            </Link> 
          </Box> */}
        
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            pt: { xs: 4, sm: 4 },
            width: '100%',
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >
          <div>
            <Link color="text.secondary" variant="body2" href="#">
              Privacy Policy
            </Link>
            <Typography sx={{ display: 'inline', mx: 0.5, opacity: 0.5 }}>
              &nbsp;•&nbsp;
            </Typography>
            <Link color="text.secondary" variant="body2" href="#">
              Terms of Service
            </Link>
            <Copyright />
          </div>
          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={{ justifyContent: 'left', color: 'text.secondary' }}
          >
            <IconButton
              color="inherit"
              size="medium"
              href="https://github.com/riddhesh-ture"
              target='_blank'
              aria-label="GitHub"
              sx={{ alignSelf: 'center' }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              color="inherit"
              size="medium"
              href="https://instagram.com/riddhesh.ture"
              target='_blank'
              aria-label="Instagram"
              sx={{ alignSelf: 'center' }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              color="inherit"
              size="medium"
              href="https://x.com/riddhesh_ture"
              target='_blank'
              aria-label="X"
              sx={{ alignSelf: 'center' }}
            >
              <XIcon />
            </IconButton>
            <IconButton
              color="inherit"
              size="medium"
              href="https://www.linkedin.com/in/riddheshture"
              target='_blank'
              aria-label="LinkedIn"
              sx={{ alignSelf: 'center' }}
            >
              <LinkedInIcon />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </React.Fragment>
  );
}
