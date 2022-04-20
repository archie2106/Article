import React, {useEffect} from 'react'
import './HomePage.css';
import Header from '../../components/HomePage/Header/Header';
import Footer from '../../components/HomePage/Footer/Footer';
import BlogCard from '../../components/HomePage/BlogCard/BlogCard';
import {AiOutlinePlus} from 'react-icons/ai';
import {useSelector, useDispatch} from 'react-redux';
import { AllBlogs, setBlogs } from '../../features/blogs/blogSlice';
import AdminService from '../../AdminServices/AdminService';
import { useNavigate } from 'react-router';

export default function HomePage() {
    const history = useNavigate();
    const dispatch = useDispatch();
    const blogList = useSelector(AllBlogs);
    useEffect(() => {
        AdminService.getAll()
            .then(res => {
                if(res.status === 200){
                    dispatch(setBlogs({
                        blogs: res.data
                    }))
                }
            })
            .catch(err => console.log(err))
    })
    return (
        <div className="myBlogs__home">
            <Header />
            <div className="MyBlogs_HomeContainer">
                <div className="MyBlogs_BlogContainer">
                    {blogList && blogList.map(blog => {
                        return(
                            <BlogCard 
                                key={blog.id} 
                                title={blog.title} 
                                content={blog.content}
                                image={blog.post_image}
                                date={blog.added_date}
                                id={blog.id}
                            />
                        )
                    })}
                </div>
            </div>
            <div className="AddBlog">
                <div className="AddBlogButton" onClick={() => history('/create')}>
                    <AiOutlinePlus size={30} color="white" />
                </div>
                <p className="AddBlogText">Add Blog</p>
            </div>            
            <Footer />
        </div>
    )
}
