import { decode } from '../util/decode';
import { useRequest } from './request'

const useDownload = () => {
    const { makeRequest } = useRequest();
    const donwload = async (id, suffix) => {
        const type = (suffix === 'png' || suffix === 'jpg' || suffix === 'jpeg') ? 'image' : 'text';
        const { bin, tree } = await makeRequest('api/image/getCompressed', 'POST', { id, type })
        const decoded = decode(tree, bin);
        const tempLink = document.createElement('a');
        tempLink.setAttribute('download', 'filelizard.'+suffix);
        tempLink.href = decoded;
        tempLink.click();
    }
    return donwload;
}

export default useDownload;