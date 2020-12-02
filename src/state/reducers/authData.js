import produce from 'immer';

const curr =  JSON.parse(localStorage.getItem('curr'));

const placeHolder = {
    token: (curr && curr.token) || null,
    id: (curr && curr.id) || null,
    ready: false
}

const authData = produce((data = placeHolder, action = { type: "DEFAULT" }) => {
    switch (action.type) {
        case "LOGIN":
            data.token = action.token;
            data.id = action.id;
            localStorage.setItem('curr', JSON.stringify({ token: data.token, id: data.id }));
            data.ready = true;
            return data;
        case "LOGOUT":
            data.token = null;
            data.id = null;
            localStorage.removeItem('curr');
            return data;
        default:
            return data;
    }
})

export default authData;