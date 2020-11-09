import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import profileImg from '../images/profile.jpeg';



const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    marginTop: 10,
  },
  media: {
    height: 400,

  },
});

function Home() {
  const classes = useStyles();
  return (
    <>
      <div className="profileCard">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              src={profileImg}
              title="Profile"
              component="img"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Chad J Laflamme - Web Developer
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Full-stack web developer with extensive experience in leadership, education, and management with a certificate in full stack web development from the University of New Hampshire.Trained in HTML, CSS, JavaScript, Node.JS, Angular and React. 
<br />
Many years of wilderness leadership has demonstrated my ability to work in a team and under great stress. I look forward to contributing to projects that help increase the quality of the user’s experience with my creative problem-solving and mission driven focus.  


          </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" href="https://www.linkedin.com/in/chad-j-laflamme/" target="_blank">
              LinkedIn
        </Button>
            <Button size="small" color="primary" href="https://github.com/cjlaflamme1" target="_blank">
              GitHub
        </Button>
        <Button size="small" color="primary" href="mailto:cjlaflamme1@plymouth.edu">
              EMAIL
        </Button>
        <Button size="small" color="primary" >
              Phone: 949-204-4740
        </Button>
          </CardActions>
        </Card>
      </div>

    </>
  );
}

export default Home;