import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap'; // Assuming you're using Bootstrap for cards
import v1 from '../../assets/v1.mp4';
import v2 from '../../assets/v2.mp4';
import v3 from '../../assets/v3.mp4';
import v4 from '../../assets/v4.mp4';
import v5 from '../../assets/v5.mp4';
import v6 from '../../assets/v6.mp4';
import v7 from '../../assets/v7.mp4';
import v8 from '../../assets/v8.mp4';
import v9 from '../../assets/v9.mp4';
import v10 from '../../assets/v10.mp4';
import './videos.css'; // Import the CSS file

const Videos = () => {
  return (
    <div>
      <h2>தாய்ப்பால் பற்றிய வீடியோ பதிவுகள்</h2>
      <div className="video-container">
        <Card className="video-card">
          <CardBody>
           <video controls controlsList="nodownload">
              <source src={v3} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <CardTitle className="video-title">தாய்ப்பாலின் நன்மைகள்</CardTitle>
          </CardBody>
        </Card>
        <Card className="video-card">
          <CardBody>
           <video controls controlsList="nodownload">
              <source src={v1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <CardTitle className="video-title">தாய்ப்பால் கொடுக்கும் சரியான முறைகள்</CardTitle>
          </CardBody>
        </Card>
        <Card className="video-card">
          <CardBody>
           <video controls controlsList="nodownload">
              <source src={v4} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <CardTitle className="video-title">கால்பந்து நிலையில் தாய்ப்பால் கொடுக்கும் முறை</CardTitle>
          </CardBody>
        </Card>
        <Card className="video-card">
          <CardBody>
           <video controls controlsList="nodownload">
              <source src={v6} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <CardTitle className="video-title">குறுக்கு தொட்டில் பிடிநிலையில் தாய்ப்பால் கொடுக்கும் முறை</CardTitle>
          </CardBody>
        </Card>   
        <Card className="video-card">
          <CardBody>
           <video controls controlsList="nodownload">
              <source src={v7} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <CardTitle className="video-title">பக்கவாட்டில் சாய்ந்த நிலையில் தாய்ப்பால் கொடுக்கும் முறை</CardTitle>
          </CardBody>
        </Card>        

        <Card className="video-card">
          <CardBody>
            <video controls controlsList="nodownload">
              <source src={v8} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <CardTitle className="video-title">கையால் தாய்ப்பாலை வெளிப்படுத்தும் முறை</CardTitle>
          </CardBody>
        </Card>

        <Card className="video-card">
          <CardBody>
          <video controls controlsList="nodownload">
              <source src={v5} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <CardTitle className="video-title">வெளிப்படுத்தப்பட்ட தாய்ப்பாலை சேமிக்கும் முறை</CardTitle>
          </CardBody>
        </Card>

        <Card className="video-card">
          <CardBody>
            <video controls controlsList="nodownload">
              <source src={v2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <CardTitle className="video-title">வெளிப்படுத்தப்பட்ட தாய்ப்பாலை குழந்தைக்கு கொடுக்கும் முறை</CardTitle>
          </CardBody>
        </Card>

        <Card className="video-card">
          <CardBody>
            <video controls controlsList="nodownload">
              <source src={v9} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <CardTitle className="video-title">மார்பக வீக்கம் மற்றும் சரி செய்யும் முறை</CardTitle>
          </CardBody>
        </Card>
        <Card className="video-card">
          <CardBody>
            <video controls controlsList="nodownload">
              <source src={v10} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <CardTitle className="video-title">முலைக்காம்பு புண் மற்றும் சரி செய்யும் முறை</CardTitle>
          </CardBody>
        </Card>

      </div>
    </div>
  );
};

export default Videos;
