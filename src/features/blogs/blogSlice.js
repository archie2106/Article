import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    blogs: null,
    singleBlog: null,
};

const blogSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        setBlogs: (state, action) => {
            state.blogs = action.payload.blogs;
        },
        setIndividualBlog: (state, action) => {
            state.singleBlog = action.payload.singleBlog;
        },
    },
});

export const {setBlogs, setIndividualBlog} = blogSlice.actions;

export const AllBlogs = state => state.blog.blogs;
export const BlogData = state => state.blog.singleBlog;

export default blogSlice.reducer;