import { useState, useEffect } from 'react';

const Auth = () => {
    const [token, setToken] = useState(null);
    const [id, setid] = useState(null);
    const [ready, setReady] = useState(null)

    const login = (token, id) => {
        setToken(token);
        setid(id);
        localStorage.setItem('curr', JSON.stringify({id, token}));
    }

    const logout = () => {
        setToken(null);
        setid(null);
        localStorage.removeItem('curr');
    }

    useEffect(() => {
        const curr = JSON.parse(localStorage.getItem('curr'));
        if(curr && curr.token) login(curr.token, curr.id);
        setReady(true)
    }, [login])

    return {login, logout, token, id, ready};
}

export default Auth;
