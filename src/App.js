import React, { useState } from 'react';

const ImagePopup = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      name: 'SMART INDIA HACKATHON',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/my-first-projects-8b061.appspot.com/o/image1.jpg?alt=media&token=f77118b9-5c4a-4535-8e26-8528c68f90f0',
      details: 'YEAR: 2021-22...\nPRIZE: Rs.1,00,000\nTEAM MEMBERS: A, B, C\nIDEA: Chatbot for medical prescriptions',
    },
    {
      id: 2,
      name: 'CODING CONTEST',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/my-first-projects-8b061.appspot.com/o/image3.jpg?alt=media&token=3803ea48-f1b3-4afa-8991-e8d3ae841cf2',
      details: 'YEAR: 2021-22...\nPRIZE: Rs.1,00,000\nTEAM MEMBERS: A, B, C\nPLACE: 3rd place',
    },
  ];

  const openEventDetails = (event) => {
    setSelectedEvent(event);
    setShowDetails(true);
  };

  const closeEventDetails = () => {
    setSelectedEvent(null);
    setShowDetails(false);
  };

  return (
    <div>
      {showDetails && selectedEvent && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(255,255,255,1)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            flexDirection: 'column',
            color: 'black', 
          }}
          onClick={closeEventDetails}
        >
          <h2>{selectedEvent.name}</h2>
          <img
            src={selectedEvent.imageUrl}
            alt={selectedEvent.name}
            style={{ maxWidth: '50%', maxHeight: '50%', objectFit: 'contain' }}
          />
          <div style={{ marginTop: '20px', whiteSpace: 'pre-line' }}>
            {selectedEvent.details}
          </div>
        </div>
      )}

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {events.map((event) => (
          <img
            key={event.id}
            src={event.imageUrl}
            alt={event.name}
            style={{ width: '200px', height: '200px', margin: '10px', cursor: 'pointer' }}
            onClick={() => openEventDetails(event)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImagePopup;
