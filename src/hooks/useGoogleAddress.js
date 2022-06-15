import { useState, useEffect } from 'react';
import axios from 'axios';

const callSomeAPI = async (API, setMap) => {
    const response = await axios(API)
        setMap({
            lat: response.data.data[0].latitude,
            lng: response.data.data[0].longitude,
        });
}
const useGoogleAddresss = address => {
    const [map, setMap] = useState({lat: '', lng: ''});
    const appKey = process.env.REACT_APP_POSITIONSTACK
    const API = `http://api.positionstack.com/v1/forward?access_key=${appKey}&query=${address.address}, ${address.country}`
    useEffect( () => {
        callSomeAPI(API, setMap)
    },[])
    return map;
};

export default useGoogleAddresss