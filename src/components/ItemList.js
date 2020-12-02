import React from 'react'

import useDownload from '../hooks/useDownload';
import useStyles from '../styles/useStyles';
import { useDispatch } from 'react-redux';
import { useRequest } from '../hooks/request';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

function ItemList(props) {

    const classes = useStyles();
    const { makeRequest } = useRequest();
    const dispatch = useDispatch();

    const download = useDownload();

    const itemGrid = props.items.map((el, i) => {
        return (
            <Grid container spacing={1} key={i}>
                <Grid item xs={6} md={3}>
                    <div className={classes.demo}>
                        <List dense={true}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <FolderIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={el.name}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton aria-label='download' onClick={() => {
                                        download(el.id, el.name.substring(el.name.lastIndexOf('.')+1));
                                    }}>
                                        <CloudDownloadIcon />
                                    </IconButton>
                                    <IconButton edge='end' aria-label='delete' onClick={() => {
                                        makeRequest('api/image/delete', 'POST', { id: el.id, type: el.type })
                                        dispatch({ type: 'DELETE_ITEM', id: el.id })
                                    }}>
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        </List>
                    </div>
                </Grid>
            </Grid>
        )
    })

    return itemGrid;
}

export default ItemList;
