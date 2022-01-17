import React from 'react'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.snow.css";

function Posteditor() {

    const modules = {
        toolbar :[
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline','strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image'],
            [{ 'align': [] }, { 'color': [] }, { 'background': [] }],
            ['clean']
        ]
    }

    return (
        <div>
            <ReactQuill modules={modules} />
        </div>
    );
}

export default Posteditor




