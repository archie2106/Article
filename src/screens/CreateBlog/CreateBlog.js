import React, { useState } from 'react'
import './CreateBlog.css';
import Header from '../../components/CreateBlog/Header/Header';
import Footer from '../../components/HomePage/Footer/Footer';
import {BsArrowLeft} from 'react-icons/bs';
import { useNavigate } from 'react-router';
import {Form, Button} from 'react-bootstrap';
import AdminService from '../../AdminServices/AdminService';

export default function CreateBlog() {
    const history = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [post_image, setImage] = useState(null);
    const AddBlog = (blog) => {
        AdminService.createBlog(blog)
            .then(res => {
                if(res.status === 201){
                    setTimeout(() => {
                        history('/');
                    }, 500)                   
                }
            })
            .catch(err => console.log(err))
    }

    const handleChange = (e) => {
        let val = e.target.value
        if(e.target.name === 'post_image'){
            setImage(e.target.files[0]);
        } else if(e.target.name === 'title' ){
            setTitle(val);
        } else{
            setContent(val)
        }
    }

    const AddDate = () => {
        let date = new Date().toDateString().split(' ');
        let addDate = `${date[2]} ${date[1]} ${date[3]}`;
        
        return addDate;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        const added_date = AddDate();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('post_image', post_image);
        formData.append('added_date', added_date);
        AddBlog(formData);
    }

    return (
        <div className="myBlogs__home">
            <Header />
            <div className="MyBlogs_HomeContainer">
                <div className="MyBlogs_BlogContainer">
                    <div className="BackButton" onClick={() => history(-1)}>
                        <BsArrowLeft size={30} color="white" />
                    </div>
                    <Form className="NewBlogForm">
                        <Form.Group controlId="formBlogTitle">
                            <Form.Label>Blog Title</Form.Label>
                            <Form.Control type="text" name="title" required placeholder="Enter Blog title here..." defaultValue={title} onChange={(e) => handleChange(e)} />
                        </Form.Group>
                        <Form.Group controlId="formBlogContent">
                            <Form.Label>Blog Content</Form.Label>
                            <Form.Control as="textarea" name="content" rows={10} required placeholder="Enter content here..." defaultValue={content} onChange={(e) => handleChange(e)} />
                        </Form.Group>
                        <Form.Group controlId="formBlogImage">
                            <Form.Label>Cover Image</Form.Label>
                            <Form.Control name="post_image" type="file" required onChange={(e) => handleChange(e)} />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
            <Footer />
        </div>
    )
}
