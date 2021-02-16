import API from './api';
import { endpoints } from './endpoints';

export const services = {
  fetchAny: () => API.get(endpoints.any('summary'))
};
