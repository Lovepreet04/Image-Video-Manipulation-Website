import React, { useState } from 'react';
import './service.css';
import { saveAs } from 'file-saver';

export default function Video() {

  const [bannerVid, setbannerVid] = useState(null);
  const [downloadimg, setdownloadImg] = useState(null);
  const [action, setaction] = useState("");
  const [width, setwidth] = useState(27);
  const [height, setheight] = useState("");
  const [modelPrint, setmodelPrint] = useState("NOTHING TO EDIT");

  const [source, setSource] = React.useState();

  let im = source;
  let ImageName = null;

  const newImg = () => {
    if (im == null) { return (null) }

    const uploadData = new FormData();
    let currentDate = new Date();
    let a = (((currentDate.toUTCString()).replace(/ /g, '_').replace(':', '')).replace(':', '')).replace(',', '');
    let imgName = "BeautiCam_" + a + ".avi";
    ImageName = 'http://127.0.0.1:8000/media/video/EditedVid/' + imgName;
    console.log(source.duration)

    uploadData.append('video', source, imgName)
    uploadData.append('action', action)
    uploadData.append('width', width)
    uploadData.append('height', height)

    // console.log(action, width, height)
    fetch('http://127.0.0.1:8000/uploads/vid/', {
      method: 'post',
      body: uploadData
    }).then(res => console.log(res))
      .catch(error => console.log(error));
    setdownloadImg(ImageName);
  }


  const banner = (event) => {
    setbannerVid(URL.createObjectURL(event));
    setmodelPrint('SUCCESSFULL');

  }
  const handleDownload = () => {
    if (im == null) { return (null) }
    saveAs(downloadimg, 'BeautiCamVid.mp4');
  };

  return (
    <section id='header' className='d-flex align-items-center'>
      <div className='container nav_bg '>
        <div className="row">
          <div className="edit-body col-lg-6  col-sm-10 col-md-6  order-1 d-flex justify-content-center flex-column">
            <p className='edit-head  d-flex justify-content-center '>Fill the Form</p>
            <div className='form-section p-3'>
              <div className='form-group'>
                <div className='form-group'>
                  <div className='form-control'>
                    
                    <input
                      className="VideoInput_input"
                      type="file"
                      onChange={(e) => {
                        setSource(e.target.files[0])
                        banner(e.target.files[0])
                      }}
                      name='source'
                      accept=".mov,.mp4"
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
                      // <option>object(vehicle) Detection</option>
                      <option>Human Face Detection</option>
                      <option>smile Detection</option>
                      <option>Eye Detection</option>
                      <option>Pedestrian Detection</option>
                      <option>edgeDetection</option>
                      <option>Smooth</option>
                      <option>erosionImg</option>
                      <option>dilatedImg</option>
                      <option>convert2GRAY</option>
                      <option>convert2HSV</option>
                    </select>
                  </div>
                </div>
                <div className='form-group'>
                  <div className='form-control'>
                  {/* <div className="value3">0</div> */}
                    <label htmlFor="vol">Speed (between 0 and 50):</label>
                    <input
                      className="form-control form-control-lg"
                      placeholder='width'
                      type="range"
                      name="width"
                      value={width}
                      onChange={(e) => setwidth(e.target.value)}
                      required
                      min="0" max="60" id="range3"/>
                  </div>
                </div>
                <div className='form-group'>
                  <div className='form-control'>
                    {/* <input
                      type="number"
                      className="form-control form-control-lg"
                      placeholder='height'
                      name="height"
                      value={height}
                      onChange={(e) => setheight(e.target.value)}
                    /> */}
                    <label htmlFor="sel1" className="form-label">Dimension:</label>
                    <select
                      className="form-select form-control form-control-lg"
                      id="sel1"
                      placeholder='dimension'
                      name="height"
                      value={height}
                      onChange={(e) => setheight(e.target.value)}
                      required>
                      <option>Original</option>
                      <option>500 X 500</option>
                      <option>500 X 700</option>
                      <option>1920 X 1080</option>

                    </select>
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
                        <p>WAIT FOR SOME TIME....   </p>
                        <p>Press q to stop the video to process and then download...</p>
                       
                       {/* <img src={downloadimg} alt="Selected Image" className="uploadedIMG" /> */}
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
            <p className='edit-head d-flex justify-content-center '>Uploaded Video</p>
            <div className='imgContainer rounded-2'>
              {/* {image && <img src={bannerimg} alt="Selected Image" className="uploadedIMG" />} */}
              {source && (
                <video
                  className="VideoInput_video"
                  width="100%"
                  height={height}
                  controls
                  src={bannerVid}
                />
              )}
            </div>
            <button className='btn  mt-3 get-started' onClick={handleDownload}>Download Video</button>
          </div>
        </div>
      </div>
    </section>
  );
}
