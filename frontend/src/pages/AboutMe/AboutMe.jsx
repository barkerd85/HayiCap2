import HoverVideoPlayer from 'react-hover-video-player';
import weddingStock from '../../components/Assets/weddingStock.mp4';


function AboutMe() {
  return (
    <div classname="bg">
      <div className='overlay'></div>
      
    <HoverVideoPlayer
      videoSrc={weddingStock}
      pausedOverlay={
        <img
          src="thumbnail-image.jpg"
          alt=""
         
        />
      }
      loadingOverlay={
        <div className="loading-overlay">
          <div className="loading-spinner" />
          
        </div>
      }
    /></div>
    
    
  );
}

export default AboutMe 

 
    
  
   



         
      