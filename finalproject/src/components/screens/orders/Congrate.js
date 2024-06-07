import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function CongratCard() {
  const currentLogin = useSelector((s) => s.users.currentUser);
  const navigate = useNavigate();
  const back = () => {
    navigate('/navbar');
  };

  return (
    <Card
      data-resizable
      sx={{
        textAlign: 'center',
        alignItems: 'center',
        width: '40%',
        marginLeft: '28vw',
        marginTop: '15vh',
        overflow: 'auto',
        resize: 'horizontal',
        '--icon-size': '100px',
        backgroundColor: '#F8BBD0', // Light pink background
        border: '2px solid #E91E63', // Pink border
      }}
    >
      <Typography
        level="title-lg"
        sx={{
          mt: 'calc(var(--icon-size) / 2)',
          color: '#E91E63', // Pink text color
        }}
      >
        🎊 Congrats {currentLogin?.firstName} 🎊
      </Typography>
      <CardContent sx={{ maxWidth: '40ch' }}>
        The order was successfully.
      </CardContent>
      <CardActions
        orientation="vertical"
        buttonFlex={1}
        sx={{
          '--Button-radius': '40px',
          width: 'clamp(min(100%, 160px), 50%, min(100%, 200px))',
        }}
      >
        <Button
          onClick={back}
          variant="plain"
          sx={{
            backgroundColor: '#E91E63', // Pink button background
            color: 'white', // White button text
          }}
        >
          Back to the site
        </Button>
      </CardActions>
    </Card>
  );
}
