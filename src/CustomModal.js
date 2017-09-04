import React from 'react';

const CustomModal = ({ closeModal }) => {
  return (
    <div id='backdrop' onClick={closeModal}>
      <div id='modal' />
    </div>
  );
}

export default CustomModal;
