import React from 'react'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { Button, Grid } from '@material-ui/core';
import useStyles from '../styles/useStyles'
import '../index.css'
import TextCard from '../components/TextCard';
import useProcessData from '../hooks/useProcessData';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

function CompressText() {
    const classes = useStyles();
    const processData = useProcessData()

    return (
        <Grid container >
            <Button onClick={() => document.getElementById('getFile').click()}>
                <input type='file' onChange={processData} id='getFile' style={{ 'display': 'none' }} />
                <CloudUploadIcon style={{ 'fontSize': 100 }}/>
            </Button>
            <ArrowRightAltIcon className={classes.iconArrow} />
            <TextCard type='text' />
        </Grid>
    )
}

export default CompressText
