import {  useState } from "react";

const AddBlog = () => {
    let [ title, setTitle ] = useState('');
    let [ content, setContent ] = useState('');
    
    const getDataInput = () => {
        if(!title){
            alert('Title không được để trống');
            return;
        }
        if(!content){
            alert('Content không được để trống');
            return;
        }
        console.log(">>>>>>>> check data: ",title," ", content);
    
    }

    return (
        <>
            <div className="row">
                <div className="col-4"> </div>
                <div className="col-4 border p-3">
                        <div class="row mb-3">
                            <label class="col-sm-2 col-form-label">Title</label>
                            <div class="col-sm-10">
                                <input type="text" value={title} class="form-control" id="inputEmail3" onChange={(event) => setTitle(event.target.value)}  />
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label class="col-sm-2 col-form-label">Content</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="inputPassword3" value={content} onChange={(event) => setContent(event.target.value)} />
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary" onClick={getDataInput}>Add Blog</button>
                </div>
                <div className="col-4"> </div>
            </div>
        </>
    )
}

export default AddBlog;