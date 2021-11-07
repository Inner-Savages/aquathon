import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import PublicIcon from '@mui/icons-material/Public';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import img from '../img.png';
import '../kopytko.css';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();
theme.spacing(2)

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PublicIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Lokalizator betonowych pustyń
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "#FFFFFF",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.secondary"
              gutterBottom
            >
              Lokalizator betonowych pustyń
            </Typography>
            <Typography variant="h4" align="center" color="text.secondary" paragraph>
              Każde większe miasto staje przed wyzwaniem jak najbardziej optymalnego wykorzystania wód opadowych. Jest to tym bardziej istotne w kontekście zwiększającego się zagęszczenia zabudowy.
              Intensywne uszczelnianie powierzchni przepuszczalnych powoduje dużo negatywnych skutków, chociażby zwiększenie spływu powierzchniowego.
              <hr color="blue" width="550px" />
              Dlatego tak ważne jest aby nie zapominać o zdrowej równowadze i wraz ze zwiększającą się ilością powierzchni zabudowej, pamiętać o potencjale terenów zielonych.
              Koncepcja miasta gąbki idealnie wpasowuje się w tę potrzebę.
            </Typography>
            <img
              src={img}
              class="center"
              height={350}
              width={700}
              style={{ margin: "0 auto", display: "block" }}
            />
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            </Stack>
            <hr color="blue" width="550px" />
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=12VLCMtsHkDYJk4jr7oxkhDTITlz0EvaB"
              width="640"
              height="480"
              style={{ margin: "0 auto", display: "block" }}
            >
            </iframe>
            <Typography variant="h2" align="center" color="text.secondary" paragraph>
              <br />
              Legenda
            </Typography>
            <Typography variant="h4" align="center" color="text.secondary" paragraph>
              Kolory przechodzą płynnie w zależności od rodzaju zidentyfikowanego obszaru.
            </Typography>
            <Typography variant="h4" align="left" color="#f50057" paragraph>
              <br />
              - Kolor czerwony - obszary zidentyfikowane jako "betonowe pustynie"
            </Typography>
            <Typography variant="h4" align="left" color="#4caf50" paragraph>
              - Kolor zielony - obszary z potencjałem na zatrzymanie wody "w mieście"
            </Typography>
            <Typography variant="h4" align="left" color="#ffea00" paragraph>
              - Kolor zółty - obszary mieszane, tj. niemożliwe do jednoznacznego zakwalifikowania jako zielone/czerwone
            </Typography>
            <hr />
            <Typography variant="h2" align="center" color="text.secondary" paragraph>
              Pomysły na wykorzystanie
            </Typography>
            <Typography variant="h4" align="left" color="text.secondary" paragraph>
              <br />
              - Identyfikacja obszarów o niskiej retencji,
              <br />
              - Skupienie działań mających na celu poprawę retencji na obszarach tego wymagających,
              <br />
              - Wizualizację możliwości retencyjnych miasta.
              <hr />
            </Typography>
          </Container>
        </Box>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: '#1e88e5', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          <a href="https://innersavages.pl/" >
            Inner Savages
          </a>
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          @luc @jqu @tekashi @vocogy
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
