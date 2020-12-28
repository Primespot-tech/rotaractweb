import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Project.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Project(){
    return(
        <div className="project_page"><h2>Currently On Progress</h2>
            <Grid container spacing={2} className="project_title">
                    <Grid item xs={4}>
                       <paper> 
                            <h4>Sidebar_title</h4>
                       </paper>
                    </Grid>
                    <Grid item xs={4}>
                       <paper> 
                            <h4>Event Name</h4>
                       </paper>
                    </Grid>
                    <Grid item xs={4}>
                         <paper>
                            <h4>Schedule</h4>
                        </paper>   
                    </Grid>
            </Grid>
            <Grid container spacing={2} className="project_content">
                    <Grid item xs={4}>
                       <paper> 
                            <h4>Sidebar Content</h4>
                       </paper>
                    </Grid>
                    <Grid item xs={4}>
                        Constitution Day Celebration 
                    </Grid>
                    <Grid item xs={4}>
                        Date: 26th November 2020<br />
                    Platform: Gmeet<br />
                Meeting link: https://gmeet.yrg-nojd-mpt.com
                    </Grid>   
            </Grid>
            <Grid container spacing={2} className="project_content">
                    <Grid item xs={4}>
                       <paper> 
                            <h4>Sidebar Content</h4>
                       </paper>
                    </Grid>
                    <Grid item xs={4}>
                        Constitution Day Celebration 
                    </Grid>
                    <Grid item xs={4}>
                        Date: 26th November 2020<br />
                    Platform: Gmeet<br />
                Meeting link: https://gmeet.yrg-nojd-mpt.com
                    </Grid>
            </Grid>
            <Grid container spacing={2} className="project_content">
                    <Grid item xs={4}>
                       <paper> 
                            <h4>Sidebar Content</h4>
                       </paper>
                    </Grid>
                    <Grid item xs={4}>
                        Constitution Day Celebration 
                    </Grid>
                    <Grid item xs={4}>
                        Date: 26th November 2020<br />
                    Platform: Gmeet<br />
                Meeting link: https://gmeet.yrg-nojd-mpt.com
                    </Grid>
            </Grid>
        </div>
    )
}

export default Project