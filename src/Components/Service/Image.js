import React, { useState } from 'react';
import './service.css';
import { saveAs } from 'file-saver';


export default function Image() {
  const [image, setImage] = useState(null);
  const [bannerimg, setbannerImg] = useState(null);
  const [downloadimg, setdownloadImg] = useState(null);
  const [action, setaction] = useState("");
  const [width, setwidth] = useState(500);
  const [height, setheight] = useState(500);
  const [modelPrint, setmodelPrint] = useState("NOTHING TO EDIT");
  let im=image;
  let ImageName=null;

  const newImg = () => {
    if (im==null) {return(null)}
    
    const uploadData = new FormData();
    let currentDate = new Date();
    let a = (((currentDate.toUTCString()).replace(/ /g, '_').replace(':', '')).replace(':', '')).replace(',', '');
    let imgName = "BeautiCam_" + a + ".png";
    ImageName = 'http://127.0.0.1:8000/media/image/' + imgName;
    console.log(image,action);
    uploadData.append('image', image, imgName)
    uploadData.append('action', action)
    uploadData.append('width', width)
    uploadData.append('height', height)
    console.log(action)
    fetch('http://127.0.0.1:8000/uploads/img/', {
      method: 'post',
      body: uploadData
    }).then(res => console.log(res))
      .catch(error => console.log(error));
      setdownloadImg(ImageName);  
  }

  
  const banner = (event) => {
    setbannerImg(URL.createObjectURL(event));
    setmodelPrint('SUCCESSFULL');
  }
  const handleDownload = () => {
    if (im==null ) {return(null)}
    saveAs(downloadimg, 'BeautiCamImg.png');
    // setbannerImg(ImageName);
  };
  return (
      <section id='header' className='d-flex align-items-center'>
        <div className='container nav_bg mt-3 mb-3'>
          <div className="row">
            <div className="edit-body col-lg-6  col-sm-10 col-md-6  order-1 d-flex justify-content-center flex-column">
              <p className='edit-head  d-flex justify-content-center '>Fill the Form</p>
              <div className='form-section p-3'>
                <div className='form-group'>
                  <div className='form-group'>
                    <div className='form-control'>
                      <input className="form-control form-control-lg"
                        type="file"
                        name="image"
                        // onChange={handleImageChange}
                        onChange={(e) => {
                          setImage(e.target.files[0])
                          banner(e.target.files[0])
                        }}
                        accept="image/*"
                        required // Allow only image files
                      />
                    </div>
                  </div>
                  <div className='form-group'>
                    <div className='form-control'>
                      <label htmlFor="sel1" className="form-label">Action:</label>
                      <select
                        className="form-select form-control form-control-lg"
                        id="sel1"
                        placeholder='Action'
                        name="action"
                        value={action}
                        onChange={(e) => setaction(e.target.value)}
                        required>
                        <option>NONE</option>
                        <option>edgeDetection</option>
                        <option>imgScalling</option>
                        <option>imgBlue Less</option>
                        <option>imgBlue Medium</option>
                        <option>imgBlue Smooth</option>
                        <option>borderedImg</option>
                        <option>erosionImg</option>
                        <option>dilatedImg</option>
                        <option>convert2GRAY</option>
                        <option>convert2HSV</option>
                      </select>
                    </div>
                  </div>
                  <div className='form-group'>
                    <div className='form-control'>
                      <input
                        type="number"
                        className="form-control form-control-lg"
                        placeholder='width'
                        name="width"
                        value={width}
                        onChange={(e) => setwidth(e.target.value)}
                        required />
                    </div>
                  </div>
                  <div className='form-group'>
                    <div className='form-control'>
                      <input
                        type="number"
                        className="form-control form-control-lg"
                        placeholder='height'
                        name="height"
                        value={height}
                        onChange={(e) => setheight(e.target.value)}
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn  mt-3 get-started mb-auto" onClick={newImg} data-bs-toggle="modal" data-bs-target="#myModal" >Submit</button>
                  {/* */}
                  {/* <!-- The Modal --> */}
                  <div className="modal" id="myModal">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        {/* <!-- Modal Header --> */}
                        <div className="modal-header">
                          <h4 className="modal-title">{modelPrint}</h4>
                          <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        
                        {/* <!-- Modal body --> */}
                        <div className="modal-body">
                        <img src={downloadimg} alt="Selected Image" className="uploadedIMG" />
                        </div>
                        {/* <!-- Modal footer --> */}
                        <div className="modal-footer">
                          <button type="button" className="btn btn-danger" data-bs-dismiss="modal" >Close</button>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="edit-body col-lg-6  col-sm-10 col-md-6  order-2 d-flex justify-content-center flex-column uploadimage">
              <p className='edit-head d-flex justify-content-center '>Uploaded Image</p>
              <div className='imgContainer rounded-2'>
                {image && <img src={bannerimg} alt="Selected Image" className="uploadedIMG" />}
              </div>
              <button className='btn  mt-3 get-started' onClick={handleDownload}>Download Image</button>
            </div>
          </div>
        </div>
      </section>
  );
}