import React from 'react';
import {Table,Tablekavya,TableCell,Paper, TableRow} from '@material-ui/core'
import logo from './images/logo.png';
import map from './images/map.png';
import meet3 from './images/meet3.jpeg';
import meet1 from './images/meet1.jpeg';
import meet2 from './images/meet2.png';
import {Navbar, Button,Carousel} from 'react-bootstrap';
import './Mainpage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Typography, IconButton,CardContent, Card, CardMedia,Collapse, CardActions,CardHeader } from '@material-ui/core';
import {createMuiTheme} from '@material-ui/core/styles';


function mainpage() {



    return (
        <div className="header">
            <Navbar bg="primary" variant="dark"> 
                <img className="logo" src={logo} alt="logo"/>
                <p style={{color:'white'}} >ROTARACT CLUB OF ADITHYA</p> 
                <Button className="sign_btn" variant="outline-light">SignIn</Button> 
            </Navbar>
            
            
               <Table>
                       <TableRow className="trend" >
                           <TableCell className="column">
                                <Card className="cardStyle">
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
                                        <IconButton aria-label="show more"><b><h4>Show More</h4></b></IconButton>
                                    </CardActions>
                                    <Collapse timeout="auto" unmountOnExit>
                                        <CardContent>
                                            <Typography paragraph>
                                                Heat oil in a (14- to 14-inch) paella pan or a large, deep skillet over medium-high
                                                heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                                                bkavyaned, 4 to 8 minutes. 
                                            </Typography>
                                        </CardContent>
                                    </Collapse>    
                                    
                                </Card>
                            </TableCell>
                    
                    <TableCell className="column">
                        
                        <Card className="cardStyle">
                            
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={meet1}
                                    alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={meet2}
                                    alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={meet3}
                                    alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Card>
                    
                    </TableCell >
                   
                    
                    <TableCell className="column">
                        <Card className="cardStyle">
                            <CardHeader title="Gallery" />
                            
                                <Typography class="image">
                                {/*    <a href='Gallery.html'>view</a> */}
                                </Typography>
                        </Card>
                    </TableCell>   
                    
                </TableRow>
        
                <TableRow className="trend">
                    <TableCell className="column">
                        <Card className="about">
                            <h3>About Us</h3>
                        </Card>
                    </TableCell>                 
                    
                    <TableCell className="column">
                        <Card className="content">
                            <h4>Content</h4>
                        </Card>
                    </TableCell>
                   
                    
                    <TableCell className="column">
                        <Card className="followus">
                            <h3>Follow Us On</h3>
                            <h4><a href="google.com">Instagram</a></h4>
                            <h4><a href="google.com">Facebook</a></h4>
                            <h4><a href="google.com">LinkedIn</a></h4>
                            <h4><a href="google.com">Youtube</a></h4>
                            <h4><a href="https://www.google.com/maps/place/Adithya+Institute+Of+Technology/@11.1131923,77.0339193,17z/data=!4m5!3m4!1s0x0:0xde4c119d4cddb18c!8m2!3d11.113445!4d77.0363977" >
                                Google Map
                            </a></h4>
                        </Card>
                    </TableCell>                
                </TableRow>
                <TableRow className="footer">
                    <TableCell className="column">
                        <img className="footerlogo" src={logo} alt="logo"/>
                        <Paper className="footertext">
                        <h6 style={{fontSize:'10'},{color:'white'}} >ROTARACT CLUB OF ADITHYA</h6>
                        </Paper>
                    </TableCell>
                    <TableCell className="column">
                        <a href="https://www.google.com/maps/place/Adithya+Institute+Of+Technology/@11.1131923,77.0339193,17z/data=!4m5!3m4!1s0x0:0xde4c119d4cddb18c!8m2!3d11.113445!4d77.0363977" >
                        <img className="map" src={map} alt="logo"/>
                        </a>
                    </TableCell>
                    <TableCell className="column">
                            <h4 style={{color:'white'}} className="contactus" >Contact Us:</h4>
                            <Typography className="contactcontent">
                                <a href="google.com">Home</a><br />
                                <a href="google.com">Terms of services</a><br />
                                <a href="google.com">Privacy Policy</a><br />
                                <a href="google.com">contact</a>
                            </Typography>
                    </TableCell>
            </TableRow>
    </Table> 
</div>
        
    )
}
export default mainpage ;