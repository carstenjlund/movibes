import Modal from "react-modal";
import { useState, useEffect } from "react";
import axios from "axios";

const ActorModal = ({ isActorModalOpen, closeActorModal, actorId }) => {
  const [actor, setActor] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/person/${actorId}?language=en&api_key=c28b09251184479f999a2baafd615444`
    )
      .then((response) => setActor(response.data))
      .finally(() => setLoading(false));
  }, [actorId]);

  const handleCloseRequest = () => {
    setActor(null);
    closeActorModal();
  };

  return loading ? (
    <p>Loading... </p>
  ) : (
    <Modal isOpen={isActorModalOpen} onRequestClose={handleCloseRequest}>
      <div
        style={{
          width: "10rem",
          height: "10rem",
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src={`https://image.tmdb.org/t/p/w185/${actor?.profile_path}`}
          alt={actor?.name}
        />
      </div>
      <h2>{actor?.name}</h2>
      <p>{actor?.biography}</p>
    </Modal>
  );
};

export default ActorModal;
