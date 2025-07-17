import API from './axios';
import type { User } from '../types/user';

export const getUsers = async (): Promise<User[]> => {
  const res = await API.get('/users');
  return res.data;
};

export const addUser = async (user: User): Promise<User> => {
  const res = await API.post('/users', user);
  return res.data;
};