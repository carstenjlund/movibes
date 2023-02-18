import Modal from "react-modal";

const VideoModal = ({ modalOpen, closeModal, youtubeId }) => {
  Modal.setAppElement("#root");
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-75%",
      transform: "translate(-50%, -50%)",
      padding: "0px",
      border: "0px",
    },
    overlay: {
      backdropFilter: "blur(2px)",
      backgroundColor: "rgba(10,10,10,0.3)",
    },
  };

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <iframe
        autoPlay="1"
        style={{ display: "block", border: "none" }}
        width="1120"
        height="630"
        src={`https://www.youtube.com/embed/${youtubeId?.key}?autoplay=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        allowFullScreen
      ></iframe>
    </Modal>
  );
};

export default VideoModal;
