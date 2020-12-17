import React from 'react';
import {Navbar, Button} from 'react-bootstrap';
import './Mainpage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Grid, Paper} from '@material-ui/core';
import { Typography, IconButton,CardContent, Card, CardMedia,Collapse, CardActions,CardHeader } from '@material-ui/core';



function mainpage() {
    return (
        <div className="header">
            <Navbar bg="primary" variant="dark"> 
                
                <p>ROTARACT CLUB OF ADITHYA</p> 
                <Button className="sign_btn" variant="outline-light">SignIn</Button> 
            </Navbar>
            <Grid container spacing={2} className="events">
                <Grid item xs={3} className="past_events">
                    <Paper>
                        <Card>
                            <CardHeader
                                title="Past Events"
                                subheader="September 14, 2020"
                            />
                            <CardMedia    
                                image="/static/images/cards/paella.jpg"
                                title="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                This impressive paella is a perfect party dish and a fun meal to cook together with your
                                guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="show more"><b><h6>Show More</h6></b></IconButton>
                            </CardActions>
                            <Collapse timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>
                                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                                        browned, 6 to 8 minutes. 
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={6} >
                    <Paper>
                        <h1 className="trend">Trending content</h1>
                    </Paper>
                </Grid>
                <Grid item xs={3} className="gallery">
                    <Paper>
                        <Card>
                            <CardHeader title="Gallery" />
                        </Card>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={3} className="events">
                <Grid item xs={4} className="about">
                    <h3>About Us</h3>
                </Grid>
                <Grid item xs={4} className="content">
                    <h4>Content</h4>
                </Grid>
                <Grid item xs={4} className="followus">
                    <Paper>
                        <Card>
                            <h3>Follow Us On</h3>
                            <h4><a href="google.com">Instagram</a></h4>
                            <h4><a href="google.com">Facebook</a></h4>
                            <h4><a href="google.com">LinkedIn</a></h4>
                            <h4><a href="google.com">Youtube</a></h4>
                        </Card>
                    </Paper>
                </Grid>
            </Grid>
            <div className="footer">
                <Grid item xs={12} className="contact" >
                    <h4>Contact Us:</h4>
						<a href="google.com">Home</a><br />
						<a href="google.com">Terms of services</a><br />
						<a href="google.com">Privacy Policy</a><br />
						<a href="google.com">contact</a>
					
                </Grid>
            </div>
        </div>
       
    )
}
export default mainpage
