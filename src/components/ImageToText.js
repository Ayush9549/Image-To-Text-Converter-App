import React, { useState } from 'react'
import Tesseract from 'tesseract.js';

function ImageToText() {

    const [changeText, setChangeText] = useState("Copy");
    const [image, setImage] = useState(null);
    const [text, setText] = useState(null);

    const convertImageToText = async () => {
        Tesseract.recognize(image, "eng").then((e) => {
            setText(e.data.text)
        })
    };

    const handleChangeImage = e => {
        const image = e.target.files[0];
        setImage(image);
    }

    const copyText = () => {
        navigator.clipboard.writeText(text);
        setTimeout(() => {
            setChangeText('Copyed')
        }, 100);
    } 

    return (
        <>
            <h2 className='text-uppercase text-center'>Image to text converter</h2>
            <p className='fs-5'>If you want to find out how to turn an image into a text, you came to the right place. This free online tool allows you to convert from image to text.</p>
            <div className="row" style={{ height: "420px" }}>
                <div className="col-6">
                    <label className="upload bg-danger text-white d-flex gap-3 flex-column justify-content-center align-items-center" style={{ height: "200px", borderRadius: "15px", cursor: "pointer" }}>
                        <i class="fa-solid fa-cloud-arrow-up fs-1"></i>
                        <span>Darg & drop here</span>
                        <input type="file" id="image" accept='image/*' onChange={handleChangeImage} style={{ display: "none" }} />
                        <input type="button" value="Select Image" className='border-0 px-3 py-1 rounded' onclick="document.getElementById('image').click()" />
                    </label>
                    <div className="result mt-2 position-relative border rounded overflow-hidden" style={{ height: "210px" }}>
                        {image && (
                            <div className="box-image h-100">
                                <img src={URL.createObjectURL(image)} className='w-100 h-100 rounded' alt="thumb" />
                            </div>
                        )}
                        <div className="btns position-absolute top-0 end-0">
                            <button className='border-0 bg-secondary text-white' onClick={convertImageToText}>Convert</button>
                        </div>
                    </div>
                </div>
                <div className="text_container col-6 border border-2 position-relative rounded h-100 overflow-auto" >
                    {text}
                    <span className="copybtn position-absolute end-0 top-0 bg-secondary text-white px-2" style={{ cursor: "pointer", borderRadius: "0 0 0 4px" }} onClick={copyText}>{changeText}</span>
                </div>
            </div>

        </>
    )
}

export default ImageToText
