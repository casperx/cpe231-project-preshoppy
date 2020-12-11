import axios from 'axios';

export const baseURL = 'http://docker.lacia.top:3000';

const client = axios.create({
    baseURL: `${baseURL}/api`
});

export interface EventDetail {
    id: number;
    name: string;
    detail: string;
    startDateTime: string;
    endDateTime: string;
    location: string;
    eventPic: string;
}

export interface UserDetail {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    tel: string;
    profilePic: string;
}

export default client;
