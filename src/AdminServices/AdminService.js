/* eslint-disable import/no-anonymous-default-export */
import { DataService } from './dataService';

export default {
  getAll : async () => {
    return DataService.get('/blogs');
  },
  getBlog: async (id) => {
    return DataService.get(`/blogs/${id}`);
  },
  createBlog: async (data) => {
    return DataService.post('/blog/create', data);
  }
}