import { useState } from 'react';
import '../Blog.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const AddNewPost = () => {
    const [formData, setFormData] = useState({
        title: "",
        imgUrl: "",
        tags:"",
        content: ""
    });

    //handle form input
    const handeInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    //handle form submit
    const handleFormSubmit = async(e) => {
        e.preventDefault();

        //send form from backend
        await fetch("http://localhost:4005/api/posts", {
            method: "POST",
            header: {
                "content-type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        //clear input
    setFormData({
        title: "",
        imgUrl: "",
        tags: "",
        content: ""
    });
    };

    
  return (
    <div className='container box'>
         <h1> Add New Blog Post</h1>

    <form onSubmit={(e) => handeInputChange(e)}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control onChange={(e) => handeInputChange(e)}
            value={formData.title} 
            type="text" 
            placeholder="Enter blog title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="imgUrl">
        <Form.Label>Image Url </Form.Label>
        <Form.Control onChange={(e) => handeInputChange(e)}
            value={formData.image}
            type="text" 
            placeholder="Enter url" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="tags">
        <Form.Label>Tags</Form.Label>
        <Form.Control onChange={(e) => handeInputChange(e)}
            value={formData.tags} 
            type="text" 
            placeholder="Enter tags separated by comma" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="content">
        <Form.Label>Blog Content</Form.Label>
        <Form.Control onChange={(e) => handeInputChange(e)}
        as="textarea" rows={16} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </form>
       
    </div>
  )
}

export default AddNewPost