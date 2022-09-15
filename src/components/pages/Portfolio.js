import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid, Box } from "@material-ui/core";

import Title from "../layouts/Title";
import merciapp from "../../images/merciapp.png";
import devtodev from "../../images/devtodev.png";
import ciccishop from "../../images/ciccishop.png";
import githubSU from "../../images/github-su.png";
import nest from "../../images/nest.png";
import gpt3 from "../../images/gpt3.png";
import uxbank from "../../images/ux-bank.png";
import studioshop from "../../images/studioshop.png";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    height: "100%",
  },
  mainContainer: {
    backgroundColor: "var(--mainPrimary)",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto",
    display: "inline - block",
    position: "relative",
    cursor: "pointer",
  },
});
const Portfolio = () => {
  const classes = useStyles();

  return (
    <div id="portfolio" className={classes.root}>
      <Title title="My Works" center />
      <Box component="div" className={classes.mainContainer}>
        <Grid container justify="center">
          {/* Start Cart  NEST*/}
          <Grid item xs={12} sm={8} md={6}>
            {/* Start nest */}
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  style={{ objectFit: "contain" }}
                  component="img"
                  alt="Contemplative Reptile"
                  height="250"
                  image={nest}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    E-commare App
                  </Typography>
                  <h4> Nest App</h4>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  href="https://nest-store.netlify.app/"
                  size="small"
                  color="primary"
                  target="_blank"
                >
                  Live Demo
                </Button>
                <Button
                  href="https://github.com/Mojgan360/nest"
                  size="small"
                  color="primary"
                  target="_blank"
                >
                  Source Code
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* End of Nest */}

          {/* start of Cicci */}

          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  style={{ objectFit: "none" }}
                  component="img"
                  alt="Contemplative Reptile"
                  height="220"
                  image={ciccishop}
                  title="Contemplative Reptile"
                />

                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    E-commare App
                  </Typography>
                  <h4> Cicci App</h4>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  href="https://cicci-shop.netlify.app"
                  size="small"
                  color="primary"
                  target="_blank"
                >
                  Live Demo
                </Button>
                <Button
                  href="https://github.com/Mojgan360/cicci-store-master"
                  size="small"
                  color="primary"
                  target="_blank"
                >
                  Source Code
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* End Cart */}

          {/* Start Cart  ux-bank*/}
          <Grid item xs={12} sm={8} md={6}>
            {/* Start nest */}
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  style={{ objectFit: "contain" }}
                  component="img"
                  alt="Contemplative Reptile"
                  height="250"
                  image={uxbank}
                  title="Contemplative Reptile"
                />

                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Modern UI/UX Website Design{" "}
                  </Typography>
                  <h4> HooBank App</h4>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  href="https://ux-design-bank.netlify.app/"
                  size="small"
                  color="primary"
                  target="_blank"
                >
                  Live Demo
                </Button>
                <Button
                  href="https://github.com/Mojgan360/bank-UX"
                  size="small"
                  color="primary"
                  target="_blank"
                >
                  Source Code
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* End of ux-bank */}

          {/* Start Cart  GPT3*/}
          <Grid item xs={12} sm={8} md={6}>
            {/* Start nest */}
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  style={{ objectFit: "contain" }}
                  component="img"
                  alt="Contemplative Reptile"
                  height="250"
                  image={gpt3}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    GPT-3 Modern UI/UX{" "}
                  </Typography>
                  <h4> GPT-3 App</h4>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  href="https://happy-gtp3.netlify.app/"
                  size="small"
                  color="primary"
                  target="_blank"
                >
                  Live Demo
                </Button>
                <Button
                  href="https://github.com/Mojgan360/gtp-website-responsive"
                  size="small"
                  color="primary"
                  target="_blank"
                >
                  Source Code
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* End of GPT3 */}

          {/* Start Cart stadio*/}
          <Grid item xs={12} sm={8} md={6}>
            {/* Start nest */}
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  style={{ objectFit: "contain" }}
                  component="img"
                  alt="Contemplative Reptile"
                  height="250"
                  image={studioshop}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Modern UI/UX - framer-motion
                  </Typography>
                  <h4> Studio Shop App</h4>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  href="https://cicci-website.netlify.app"
                  size="small"
                  color="primary"
                  target="_blank"
                >
                  Live Demo
                </Button>
                <Button
                  href="https://github.com/Mojgan360/walking_girl"
                  size="small"
                  color="primary"
                  target="_blank"
                >
                  Source Code
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* End of studio */}

          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  style={{ objectFit: "fit" }}
                  component="img"
                  alt="Contemplative Reptile"
                  height="250"
                  image={devtodev}
                  title="MERN"
                ></CardMedia>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Social Media App
                  </Typography>
                  <h4> DevToDev App</h4>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  href="https://wataa-app.herokuapp.com/"
                  size="small"
                  color="primary"
                  target="_blank"
                >
                  Live Demo
                </Button>
                <Button
                  href="https://github.com/Mojgan360/dev-joba-app"
                  size="small"
                  color="primary"
                  target="_blank"
                >
                  Source Code
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Start Cart */}
          <Grid item xs={12} sm={8} md={6}>
            {/* Start Cart */}
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  style={{ objectFit: "fit" }}
                  component="img"
                  alt="Contemplative Reptile"
                  height="250"
                  image={merciapp}
                  title="Contemplative Reptile"
                />

                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Social Media App
                  </Typography>
                  <h4> Merci App</h4>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  href="https://merciapp.herokuapp.com/"
                  size="small"
                  color="primary"
                  target="_blank"
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* End of Cart */}

          <Grid item xs={12} sm={8} md={6}>
            {/* Start github-su */}
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="220"
                  image={githubSU}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Github Search User App
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Amazing search for Github user
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  href="https://react-github-su.netlify.app/"
                  size="small"
                  color="primary"
                  target="_blank"
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* End of githu-su */}
        </Grid>
      </Box>
    </div>
  );
};

export default Portfolio;
