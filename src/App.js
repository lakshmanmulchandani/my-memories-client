import React from "react";
import Forms from "./Components/Form/Forms";
import {Container, AppBar, Typography, Grow, Grid} from "@material-ui/core";
import useStyles from "./styles";
import Posts from "./Components/Posts/Posts";
import {getPosts} from "./actions/posts";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import "./index.css";
const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch, Posts]);
  return (
    <div>
      <Container maxWidth='lg'>
        <AppBar className={classes.appBar} position='static' color='inherit'>
          <Typography className={classes.heading} variant='h2' align='center'>
            Memories
          </Typography>
          <img
            className={classes.image}
            src='https://tanyarajhans-memories.netlify.app/static/media/memories.9cfa8a46.png'
            alt='icon'
            height='60'
            width='40'
          />
        </AppBar>

        <Grow in>
          <Container>
            <Grid
              container
              justify='space-between'
              alignItems='stretch'
              spacing={3}>
              <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={12} sm={4}>
                {" "}
                <Forms currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
};

export default App;
