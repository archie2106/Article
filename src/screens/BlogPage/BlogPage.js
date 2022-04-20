import React, { useEffect } from 'react'
import './BlogPage.css'
import Header from '../../components/BlogPage/Header/Header';
import Footer from '../../components/HomePage/Footer/Footer';
import {BsArrowLeft} from 'react-icons/bs';
import { useNavigate, useParams } from 'react-router';
import {useSelector, useDispatch} from 'react-redux';
import AdminService from '../../AdminServices/AdminService';
import { BlogData, setIndividualBlog } from '../../features/blogs/blogSlice';
import { IMAGE_ENDPOINT } from '../../AdminServices/baseUrl';

export default function BlogPage() {
    const history = useNavigate();
    const dispatch = useDispatch();
    const {id} = useParams();
    const data = useSelector(BlogData);
    useEffect(() => {
        AdminService.getBlog(id)
            .then(res => {
                if(res.status === 200){
                    dispatch(setIndividualBlog({
                        singleBlog : res.data
                    }))                    
                }                
            })
            .catch(err => console.log(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const imageUrl = data && data.post_image && `${IMAGE_ENDPOINT}${data.post_image}`;

    return (
        <div className="BlogContainer">
            <Header image={data && imageUrl} />
            <div className="MyBlogs_HomeContainer">
                <div className="MyBlogs_BlogContainer">
                    <div className="BackButton" onClick={() => history(-1)}>
                        <BsArrowLeft size={30} color="white" />
                    </div>
                    <div className="BlogContent">
                        <div className="BlogContent__title">{data && data.title}</div>
                        <div className="BlogContent__extras">
                            <div className="BlogContent__date"><span className="bold">Posted Date :</span>{data && data.added_date}</div>
                            <div className="BlogContent__author"><span className="bold">Author :</span> {localStorage.getItem('Name')}</div>
                        </div>
                        <div className="BlogContent__content">
                            {data && data.content}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
