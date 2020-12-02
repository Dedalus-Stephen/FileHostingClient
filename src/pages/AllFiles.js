import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import ItemList from '../components/ItemList';
import useGetAll from '../hooks/useGetAll'


function AllFiles() {
    const getData = useGetAll();

    useEffect(() => {
        getData();
    }, [])

    const { items } = useSelector(state => { return { items: state.allFilesContent.items } });

    return <ItemList items={items} />
}

export default AllFiles
