import React from 'react'

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import useStyles from '../styles/useStyles'
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'

function Navbar() {

    const classes = useStyles();

    const dispatch = useDispatch();

    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6' className={classes.title}>
                        FileLizard
                    </Typography>
                    <Link to='/'>
                        <Button edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
                            Save Image
                        </Button>
                    </Link>
                    <Link to='/text'>
                        <Button edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
                            Save Text
                        </Button>
                    </Link>
                    <Link to='allfiles'>
                        <Button edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
                            All files
                        </Button>
                    </Link>
                    <Button color='inherit' onClick={() => dispatch({ type: 'LOGOUT' })}>Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
