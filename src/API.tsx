import axios from 'axios';

export const baseURL = process.env.BACKEND_URL ?? 'http://localhost:3000';

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

export default client;
