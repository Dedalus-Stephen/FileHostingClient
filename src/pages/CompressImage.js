import React from 'react'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { Grid } from '@material-ui/core';
import useStyles from '../styles/useStyles'
import '../index.css'
import ImageCard from '../components/ImageCard';
import TextCard from '../components/TextCard';


function CompressImage() {

    const classes = useStyles();

    return (
            <Grid container className={classes.root}>
                <ImageCard upload={true} />
                <ArrowRightAltIcon className={classes.iconArrow} />
                <TextCard type='image'/>
                <ArrowRightAltIcon className={classes.iconArrow} />
                <ImageCard upload={false} />
            </Grid>
    )
}

export default CompressImage
