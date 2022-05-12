import React from 'react';
// import wedding2 from '../Assets/wedding2.mp4';
// import wedding3 from '../Assets/wedding3.mp4';
// import wedding4 from '../Assets/wedding4.mp4';
// import wedding5 from '../Assets/wedding5.mp4';
import wphoto1 from '../Assets/wphoto1.jpg';
import wphoto2 from '../Assets/wphoto2.jpg';
import Masonry from 'react-masonry-css'




const EmbeddedVideos = () => {
  return (
    // <div >
    //     <video className='emvideos' src={wedding2} autoPlay loop muted /> {" "}{" "}
    //     <video className='emvideos' src={wedding3} autoPlay loop muted /> {" "}{" "}
    //     <br></br><br></br>
    //     <video className='emvideos' src={wedding4} autoPlay loop muted /> {" "}{" "}
    //     <video className='emvideos' src={wedding5} autoPlay loop muted /> {" "}{" "}
    //     <br></br><br></br>
    //     <img src={wphoto2} className="rounded" alt="Logo" />; {" "}{" "}
    //     <img src={wphoto1} className="rounded"  alt="Logo" />; {" "}{" "}
    //     </div  >

    <div class="row">
  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />

    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Wintry Mountain Landscape"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Mountains in the Clouds"
    />

    <p>Ariel Lord
      <br />
      <br />
      <br />
      About Me 
      <br />
      Videography & Photography
      <br />
      Dallas Texas
    </p>
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Waves at Sea"
    />

    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"
    />
  </div>
</div>




        
   )
}

export default EmbeddedVideos        
        
        
        
  









