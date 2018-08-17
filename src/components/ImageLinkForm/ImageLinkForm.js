import React from 'react';

const ImageInput = () => {
    return (
        <div>
            <p className='f2'>
                {'Add image below'}
            </p>
            <div>
            <input type="file" name="myImage" accept="image/x-png,image/gif,image/jpeg" />
            <button>Upload</button>
        </div>
        </div>
        
    );
}

export default ImageInput;