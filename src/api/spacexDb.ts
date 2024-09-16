import axios from 'axios';

const API_BASE_URL = 'https://api.spacexdata.com/v4';

const rocketsEndpoint = `${API_BASE_URL}/rockets`;
const rocketDetailsEndpoint = (id: string) => `${API_BASE_URL}/rockets/${id}`;
const launchesEndpoint = (limit:number, offset:number)=>`${API_BASE_URL}/launches?limit=${limit}&offset=${offset}`
const historyEndpoint = `${API_BASE_URL}/history`;
const launchDetailsEndpoint = (id: string) => `${API_BASE_URL}/launches/${id}`;
const upcomingLaunchesEnpoint = `${API_BASE_URL}/launches/upcoming`;


const apiCall = async (endpoint: string, params?: any) => {
  const options = {
    method: 'GET',
    url: endpoint,
    params: params || {},
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return {};
  }
};


export const getRockets = () => {
  return apiCall(rocketsEndpoint);
};

export const getRocketDetails = (id: string) => {
  return id ? apiCall(rocketDetailsEndpoint(id)) : null;
};

export const getLaunches = (offset: number=1, limit: number=5) => {
  return apiCall(launchesEndpoint(limit,offset));
};


export const getLaunchDetails = (id: string) => {
  return id ? apiCall(launchDetailsEndpoint(id)) : null;
};

export const getUpcomingLaunches =() => {
  return apiCall(upcomingLaunchesEnpoint);
}


export const getHistory = () => {
  return apiCall(historyEndpoint);
};