import { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux';

export const useRequest = () => {
    const [error, setError] = useState(null);

    const dispatch = useDispatch();

    const makeRequest = useCallback(async (url, method, body, headers = {}) => {
        console.log('request called')
        try {
            if(body) body = JSON.stringify(body);

            headers['Content-Type'] = 'application/json';

            const res = await fetch(url, {method, body, headers});

            const result = await res.json();

            if(!res.ok){
                dispatch({type: 'SET_MESSAGE', message: result.message})
            } else {
                dispatch({type: 'SET_MESSAGE', message: null})
            }

            return result;
        } catch (e) {
            console.log(e.message)
            setError(e.message);
        }
    }, [])
    return {makeRequest, error};
}
