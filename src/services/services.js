import todoAPI from './api';
import { endpoints } from './endpoints';

export const services = {
  fetchAny: () => todoAPI.get(endpoints.any('summary'))
};
