import React from 'react';
import ReactDOM from 'react-dom';
import ModalVideo from 'react-modal-video';
import "node_modules/react-modal-video/scss/modal-video.scss";


const VideoModal = ({ videoId, isOpen, onClose }) => {
  return ReactDOM.createPortal(
    <ModalVideo
      channel="youtube"
      isOpen={isOpen}
      videoId={videoId}
      onClose={onClose}
    />,
    document.body
  );
};

export default VideoModal;
