import React from 'react';

const CustomModal = ({ closeModal }) => {
  return (
    <div id='backdrop' onClick={closeModal}>
      <div id='modal'>
        <button>CONTINUE</button>
      </div>
    </div>
  );
}

export default CustomModal;
