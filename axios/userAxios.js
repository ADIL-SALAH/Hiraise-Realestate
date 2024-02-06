import { baseUrl } from '@/utils/baseUrl';
import axios from 'axios'


const userAxios = axios.create({
    baseURL: baseUrl
});

export default userAxios