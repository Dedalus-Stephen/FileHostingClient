import React from 'react'
import { useSelector } from 'react-redux';
import { Card, CardContent, Typography } from '@material-ui/core';
import useStyles from '../styles/useStyles'

function TextCard(props) {

    const classes = useStyles(); 

    const {origSize, resSize} = useSelector(
        state => props.type === 'image' ? state.imageContent : state.textContent
     );

    return (
        <Card className={classes.cardText}>
            <CardContent>
                <Typography className={classes.title} gutterBottom>
                    Original size: {origSize}
                </Typography>

                <Typography className={classes.title} gutterBottom>
                    DB stored object's size: {resSize}
                </Typography>

                <Typography className={classes.title} gutterBottom>
                    Status: {resSize ? 'Stored' : 'Waiting'}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default TextCard
