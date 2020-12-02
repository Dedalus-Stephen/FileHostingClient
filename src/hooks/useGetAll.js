import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useRequest } from './request'

const useGetAll = () => {
    const dispatch = useDispatch();
    const { makeRequest } = useRequest();
    const { userId } = useSelector(state => { return { userId: state.authData.id } });
    const [processState, setProcessState] = useState({ ready: 0, items: null });

    useEffect(async () => {
        if (processState.ready !== 0) {
            dispatch({type: 'SET_ALL_ITEMS', items: processState.items});
        }
    }, [processState.ready]);

    const getData = async (e) => {
        const { items } = await makeRequest('api/image/getAll', 'POST', { userId });
        setProcessState({ ready: 1, items });
    }

    return getData;
}

export default useGetAll;