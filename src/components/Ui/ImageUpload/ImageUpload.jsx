import React, { Component } from 'react';
import './ImageUpload.css';
import { BiImageAdd } from "react-icons/bi";

class imageUpload extends Component {

    state = {
        file: '',
        imagePreviewUrl: '',
        flushData: false,
        imageError: ""
    }

    shouldComponentUpdate = (prevProps) => {
      if (this.props.flushData !== prevProps.flushData) {
        this.setState({
          file: "",
          imagePreviewUrl: "",
          imageError: ""
        });
      }
      return true;
    }

    handleImageChange(e) {
      e.preventDefault();
      let reader = new FileReader();
      let file = e.target.files[0];
      
      let imageStatus = "";

      if(!this.isFileImage(file)){
        imageStatus = <h4 className="error">Please select a valid image</h4>
      } else if(file.size > 2000000) {
        imageStatus = <h4 className="error">Please select an image that is smaller than 2MB</h4>
      }

      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result,
          imageError: imageStatus 
        });
      }
      reader.readAsDataURL(file);
      this.getData(this.props.imageNumber, file, imageStatus);
    }

    getData = (imageNumber, val, imageStatus) => {
        this.props.sendData(imageNumber, val, imageStatus);
    }

    isFileImage(file) {
      return file && file['type'].split('/')[0] === 'image';
    }
  
    render() {

      let {imagePreviewUrl} = this.state;
      let $imagePreview = null;

      if (imagePreviewUrl) {
        if(this.state.imageError){
          $imagePreview = <div className='imagePreview' onClick={() => this.fileInput.click()} ><BiImageAdd /><p>Select Again</p></div>
        } else {
          $imagePreview = <div className='imagePreview' onClick={() => this.fileInput.click()} ><img src={imagePreviewUrl} alt=""/><p>Change Image?</p></div>
        }
      } else {
        $imagePreview = <div className='addImage' onClick={() => this.fileInput.click()} ><BiImageAdd /><p>{this.props.wording}</p></div>
      }

      return (
        <div className='ImageUpload selectable'>
            <input
                style={{display: 'none'}}
                type="file"
                accept="image/x-png,image/jpeg"
                name="newImage"
                onChange={(e)=>this.handleImageChange(e)} 
                ref={fileInput => this.fileInput = fileInput}
            />
            {$imagePreview}
            {this.state.imageError}
        </div>
      )
    }
}

  export default imageUpload