import Axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

const AxiosInstance = Axios.create({
    baseURL: 'http://10.0.2.2:3000'
})

/* AxiosInstance.interceptors.request.use(

    async (config) => {
        const token = await AsyncStorage.getItem('token');
        console.log(`token ${token}`)
        if(token)
        {
            config.headers.Authorization= `Bearer ${token}`
        }

     },
    (error) => {
        console.log(`axios error ${error}`)
        return Promise.reject(error);
     }

) */

export default AxiosInstance;