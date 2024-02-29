import React, { Component } from 'react';
import './ImageUpload.css';
import { BiImageAdd } from "react-icons/bi";

class imageUpload extends Component {

    state = {
        file: '',
        imagePreviewUrl: this.props.imagePopulatedPreview ? this.props.imagePopulatedPreview : "",
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

      // Get length of file in bytes
      let fileSizeInBytes = file.size;
      // Convert the bytes to Kilobytes (1 KB = 1024 Bytes)
      let fileSizeInKB = fileSizeInBytes / 1024;
      // Convert the KB to MegaBytes (1 MB = 1024 KBytes)
      let fileSizeInMB = fileSizeInKB / 1024;

      if(!this.isFileImage(file)){
        imageStatus = <h4 className="error">Please select a valid image</h4>
      } else if(fileSizeInMB > 7) {
        imageStatus = <h4 className="errorBackground error">Please select an image that is smaller than 7MB</h4>
      }

      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result,
          imageError: imageStatus
        });
        this.getData(this.props.imageNumber, file, this.props.imagePreview, reader.result, this.props.imageNumberError, imageStatus);
      }
      reader.readAsDataURL(file);
      
    }

    getData = (imageNumber, val, imagePreview, imagePreviewUrl, imageNumberError, imageStatus) => {
        this.props.sendData(imageNumber, val, imagePreview, imagePreviewUrl, imageNumberError, imageStatus);
    }

    isFileImage(file) {
      return file && file['type'].split('/')[0] === 'image';
    }
  
    render() {

      let {imagePreviewUrl} = this.state;
      let $imagePreview  = imagePreviewUrl ? <div className='imagePreview' onClick={() => this.fileInput.click()} ><img src={imagePreviewUrl} alt=""/><p>Change Image?</p></div> : null;

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
            {this.props.imageError}
        </div>
      )
    }
}

  export default imageUpload