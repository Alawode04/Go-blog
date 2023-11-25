import React from 'react'

const Form = () => {
  return (
    <form className="form-inline">
    <div className="form-group">
        <label>Title
          <input type="text" className="form-control" placeholder="title"></input>
        </label>
    </div>

    <div className="form-group">
        <label>Content
          <input type="content" className="form-control" placeholder="content"></input>
        </label>
    </div>

    <div className="form-group">
        <label>Upload Files</label>
        <input type="file"></input>
    </div>

    
    </form>
  )
   
}


export default Form