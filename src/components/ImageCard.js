import React from 'react'

import useProcessData from '../hooks/useProcessData'
import useStyles from '../styles/useStyles'
import { useSelector } from 'react-redux'

import { Card, CardContent, CardMedia,  Typography } from '@material-ui/core';

function ImageCard(props) {

    const classes = useStyles();

    const isUpload = props.upload;
    const processData = useProcessData();

    console.log('rendered image card, '+ isUpload);

    const url = useSelector(state => isUpload ? state.imageContent.user_url : state.imageContent.server_url);

    return (

        <Card className={classes.cardImage}>

            <CardMedia
                className={classes.media}
                image={url}
                title='Your Image'
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                    {isUpload ? 'Your Image' : 'Image From DB'}
                </Typography>
            </CardContent>

            {isUpload && <input type='file' onChange={processData} />}
        </Card>

    )
}

export default React.memo(ImageCard);
