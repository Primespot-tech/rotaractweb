import { Grid } from '@material-ui/core';
import React from 'react';
import './Meeting.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Meeting(){
    return(
        <div className="meeting_page"><h2>MEETING DETAILS</h2>
            <Grid className="meeting_title" container spacing={2}>
                <Grid item xs={2}>
                    <h4>S.No.</h4>
                </Grid>
                <Grid item xs={2}>
                    <h4>Meeting Date</h4>
                </Grid>
                <Grid item xs={2}>
                    <h4>Event Purpose</h4>
                </Grid>
                <Grid item xs={2}>
                    <h4>Event Conclusion</h4>
                </Grid>
                <Grid item xs={2}>
                    <h4>No.of Participants</h4>
                </Grid>
                <Grid item xs={2}>
                    <h4>Report Details</h4>
                </Grid>
            </Grid>
            <Grid className="meeting_content" container spacing={2}>
                <Grid item xs={2}>
                    <h4>1</h4>
                </Grid>
                <Grid item xs={2}>
                    <h4>23rd Nov</h4>
                </Grid>
                <Grid item xs={2}>
                    <h4>Discussion on Constitution Day</h4>
                </Grid>
                <Grid item xs={2}>
                    <h4>Confirmed</h4>
                </Grid>
                <Grid item xs={2}>
                    <h4>50</h4>
                </Grid>
                <Grid item xs={2}>
                    <h4>Reported</h4>
                </Grid>
            </Grid>
            <Grid className="meeting_content" container spacing={2}>
                <Grid item xs={2}>
                    <h4>1</h4>
                </Grid>
                <Grid item xs={2}>
                    <h4>23rd Nov</h4>
                </Grid>
                <Grid item xs={2}>
                    <h4>Discussion on Constitution Day</h4>
                </Grid>
                <Grid item xs={2}>
                    <h4>Confirmed</h4>
                </Grid>
                <Grid item xs={2}>
                    <h4>50</h4>
                </Grid>
                <Grid item xs={2}>
                    <h4>Reported</h4>
                </Grid>
            </Grid>
            <Grid className="meeting_content" container spacing={2}>
                <Grid item xs={2}>
                    <h4>1</h4>
                </Grid>
                <Grid item xs={2}>
                    <h4>23rd Nov</h4>
                </Grid>
                <Grid item xs={2}>
                    <h4>Discussion on Constitution Day</h4>
                </Grid>
                <Grid item xs={2}>
                    <h4>Confirmed</h4>
                </Grid>
                <Grid item xs={2}>
                    <h4>50</h4>
                </Grid>
                <Grid item xs={2}>
                    <h4>Reported</h4>
                </Grid>
            </Grid>
            <Grid className="meeting_content" container spacing={2}>
                <Grid item xs={2}>
                    <h4>1</h4>
                </Grid>
                <Grid item xs={2}>
                    <h4>23rd Nov</h4>
                </Grid>
                <Grid item xs={2}>
                    <h4>Discussion on Constitution Day</h4>
                </Grid>
                <Grid item xs={2}>
                    <h4>Confirmed</h4>
                </Grid>
                <Grid item xs={2}>
                    <h4>50</h4>
                </Grid>
                <Grid item xs={2}>
                    <h4>Reported</h4>
                </Grid>
            </Grid>
        </div>
    )
}

export default Meeting