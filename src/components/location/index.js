import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
          
              <iframe
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2704.7857155833954!2d-122.25390008409094!3d47.31852461582631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54905846942394a3%3A0x3553ca3494d71baa!2s1122+Pike+St+NW%2C+Auburn%2C+WA+98001!5e0!3m2!1sen!2sus!4v1539408251642" 
                   width="100%"
                   height="500px"
                   allowFullScreen
              ></iframe>
              <div className="location_tag">
                  <div>Location</div>

              </div>
            
        </div>
    );
};

export default Location;