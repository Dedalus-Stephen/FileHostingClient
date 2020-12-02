import { useEffect, useState } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux'
import { v4 as uuid } from 'uuid';
import { useRequest } from './request'
import { decode } from '../util/decode'

const useProcessData = () => {
    const dispatch = useDispatch();
    const { makeRequest } = useRequest();
    const { userId, imageId, textId } = useSelector(state => { return { userId: state.authData.id, imageId: state.imageContent.id, textId: state.textContent.id } });
    const [processState, setProcessState] = useState({ ready: 0, origSize: 0, resSize: 0, type: null });

    useEffect(async () => {
        if (processState && processState.ready) {
            if (processState.type === 'image') {
                const { bin, tree } = await makeRequest('api/image/getCompressed', 'POST', { id: imageId, type: processState.type });
                const decoded = decode(tree, bin);

                batch(() => {
                    dispatch({ type: 'CHANGE_POST_IMAGE', newUrl: decoded });
                    dispatch({ type: 'SET_IMAGE_STATS', origSize: processState.origSize, resSize: processState.resSize });
                })
            } else if (processState.type === 'text') {
                const { bin, tree } = await makeRequest('api/image/getCompressed', 'POST', { id: textId, type: processState.type });
                const decoded = decode(tree, bin);

                batch(() => {
                    dispatch({ type: 'CHANGE_POST_IMAGE', newUrl: decoded });
                    dispatch({ type: 'SET_TEXT_STATS', origSize: processState.origSize, resSize: processState.resSize });
                })
            }
        }
    }, [processState])

    const processData = async (e) => {
        const reader = new FileReader();
        const item = e.target.files[0];
        if (item.type === 'image/jpeg' || item.type === 'image/png') {
            reader.readAsArrayBuffer(item);
            reader.onload = async function (event) {
                const byteArray = new Uint8Array(event.target.result);
                let base64String = URL.createObjectURL(new Blob([byteArray.buffer], { type: 'image/jpg' }));
                dispatch({ type: 'CHANGE_PRE_IMAGE', newUrl: base64String });
                const res = Array.from(byteArray);
                const imageId = uuid();
                dispatch({ type: 'SET_IMAGE_ID', id: imageId });
                const result = await makeRequest('api/image/compress', 'POST', { data: res, userId, id: imageId, name: item.name }); //id
                result.message === 'Compressed!' &&
                    setProcessState(setProcessState({
                        ready: 1,
                        origSize: item.size,
                        resSize: result.size,
                        type: 'image'
                    }));
            };
        } else if (item.type === 'text/plain') {
            reader.readAsArrayBuffer(item);
            reader.onload = async function (event) {
                const byteArray = new Uint8Array(event.target.result)
                const res = Array.from(byteArray);
                const textId = uuid();
                dispatch({ type: 'SET_TEXT_ID', id: textId });
                const result = await makeRequest('api/image/compress', 'POST', { data: res, userId, id: textId, type: 'text', name: item.name }); //id
                result.message === 'Compressed!' &&
                    setProcessState(setProcessState({
                        ready: 1,
                        origSize: item.size,
                        resSize: result.size,
                        type: 'text'
                    }));
            };
        }
    }

    return processData;
}

export default useProcessData;