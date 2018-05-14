import React, { Component } from 'react';
import './Task.css';
import PropTypes from 'prop-types';
import { DEFAULT_ECDH_CURVE } from 'tls';

//import { ReactGiphy } from 'react-giphy'
//import { ReactGiphy } from 'react-giphy'

class Task extends Component{
    constructor(props){
        super(props);
        this.taskContent = props.taskContent;
        this.taskId = props.taskId;
    }

handleRemoveTask(id){
    this.props.removeTask(id);
}

FUNCION(strImagen){
    this.setState({
        newNotaImagen:strImagen,
    });
}

    render(props){
        return(
            <div className="task fade-in">
                <span className="closebtn" onClick={() => this.handleRemoveTask(this.taskId)}>
                    <button href="http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC">
                        &#10004;
                    </button>
                      
                </span>
                <p className="taskContent">{ this.taskContent }</p>

                 <input type="hidden" role="uploadcare-uploader"
                name="content" data-public-key= "e3284f045c6b3b1cd257" 
                onUploadComplete= { info=>  {console.log(info);this.FUNCION (info.cdnUrl);}}
                
                data-images-only />

               
            </div>
        )
    }
}

Task.propTypes = {
    taskContent: PropTypes.string
}

export default Task;