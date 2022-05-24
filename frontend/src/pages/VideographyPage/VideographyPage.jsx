import React from "react";
import ReactPlayer from "react-player/lazy";
import "./VideographyPage.css";
import { useNavigate } from "react-router-dom";

const Videography = () => {
  document.body.style.backgroundColor = "black";
  const navigate = useNavigate();
  return (
    <div className="container1">
      <div class="row justify-content-between">
        <div className="col-md">
          <ReactPlayer
            className
            controls
            url="https://www.youtube.com/watch?v=x9yBtlncdUw"
          />
          <h4>
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hayi
            - Brand
          </h4>
          <br />
        </div>

        <div className="col-md">
          <ReactPlayer
            controls
            url="https://www.youtube.com/watch?v=Qo3JP_f2llc"
          />
          <h4>
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lingos
            Wedding
          </h4>
          <br />
        </div>

        <div className="col-md">
          <ReactPlayer
            controls
            url="https://www.youtube.com/watch?v=WfCagMhs8F8"
          />
          <h4>
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Village
            Dallas // VFit Sneak Peak
          </h4>
          <br />
        </div>

        <div className="container2">
          <div class="row justify-content-between">
            <div className="col-md">
              <ReactPlayer
                controls
                url="https://www.youtube.com/watch?v=Q07w9ncmBvM"
              />
              <h4>
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lisa
                + Will // Wedding Day
              </h4>
              <br />
            </div>

            <div className="col-md">
              <ReactPlayer
                controls
                url="https://www.youtube.com/watch?v=t52ceW2Ttl4"
              />
              <h4>
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lisa
                & Will // Teaser
              </h4>
              <br />
            </div>

            <div className="col-md">
              <ReactPlayer
                controls
                url="https://www.youtube.com/watch?v=7PIMiDcwNvc"
              />
              <h4>
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Marzia
                + Felix // Wedding Day
              </h4>
              <br />
            </div>
            <div>
              <button
                className="btn btn-light"
                onClick={() => navigate("/calendar")}
              >
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videography;
