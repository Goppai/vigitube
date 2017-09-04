import React from 'react';
import image from './free-vector-happy-onam-flowers-card.jpg';

const CustomModal = ({ closeModal }) => {
  return (
    <div id='backdrop' onClick={closeModal}>
      <div id='modal' />
    </div>
  );
}

export default CustomModal;
