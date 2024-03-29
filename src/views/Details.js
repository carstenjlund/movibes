import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useAxios from "../customHooks/useAxios";
import VideoModal from "../components/VideoModal";
import ActorModal from "../components/ActorModal";
import { FaPlay } from "react-icons/fa";

const Details = () => {
  const { type, id } = useParams();
  const [youtubeId, setYoutubeId] = useState();
  const [actorId, setActorId] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [isActorModalOpen, setIsActorModalOpen] = useState(false);
  const [director, setDirector] = useState();
  const [writers, setWriters] = useState();

  const url = `https://api.themoviedb.org/3/${type}/${id}?language=en&api_key=c28b09251184479f999a2baafd615444&append_to_response=videos,images,credits`;
  const { data: movie, loading: movieLoading } = useAxios(url);

  useEffect(() => {
    if (movie) {
      setYoutubeId(
        movie.videos.results.find((video) =>
          video.type.toLowerCase().includes("trailer")
        )
      );

      setDirector(
        movie.credits.crew.find(
          (member) => member.job.toLowerCase() === "director"
        )
      );
      setWriters(
        movie.credits.crew.filter((member) =>
          member.job.toLowerCase().includes("writer")
        )
      );
    }
  }, [movie]);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  //const openActorModal = () => setActorModalOpen(true);
  const closeActorModal = () => setIsActorModalOpen(false);

  const handleShowMember = (id) => {
    setActorId(id);
    setIsActorModalOpen(true);
  };

  return movieLoading ? (
    <p>loading</p>
  ) : (
    <article>
      <div
        style={{ maxWidth: "56rem", aspectRatio: "16/9", position: "relative" }}
      >
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={`https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}`}
          alt=""
        />
        <button
          onClick={openModal}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "6rem",
            height: "6rem",
            borderRadius: "50%",
            border: "none",
            backgroundColor: "rgba(200,200,200,0.75) ",
          }}
        >
          <FaPlay size="1.75rem" />
        </button>
      </div>

      <h2 style={{ fontWeight: "500", color: "white" }}>
        {type === "movie"
          ? `${movie?.title}  ${movie.release_date.slice(0, 4)}  ${Math.floor(
              movie.runtime / 60
            )}h ${movie.runtime % 60}m`
          : `${movie.name}  ${movie.first_air_date.slice(0, 4)}   ${
              movie.number_of_seasons
            } ${movie.number_of_seasons === 1 ? "season" : "seasons"}`}
      </h2>
      <p style={{ color: "white", width: "56rem" }}>{movie.overview}</p>
      <p style={{ color: "white" }}>
        {" "}
        Director: <span style={{ color: "#3DD2CC" }}>{director?.name}</span>
      </p>
      {writers?.length ? (
        <p style={{ color: "white" }}>
          Writer{writers.length > 1 && "s"}:{" "}
          {writers.map((writer, index) => (
            <span key={writer.id} style={{ color: "#3DD2CC" }}>
              {index === 0 ? null : ", "} {writer.name}
            </span>
          ))}
        </p>
      ) : null}
      <p style={{ color: "white" }}>
        Stars:{" "}
        {movie.credits.cast.map((member, index) => {
          if (index < 4)
            return (
              <span key={member.id} style={{ color: "#3DD2CC" }}>
                {member.name}
                {index < 3 ? ", " : null}
              </span>
            );
        })}
      </p>
      <h2 style={{ color: "white" }}>Top Cast</h2>
      <section style={{ display: "flex" }}>
        {movie?.credits.cast.map((person, index) => {
          if (index < 4)
            return (
              <section
                key={person.id}
                onClick={() => {
                  handleShowMember(person.id);
                }}
              >
                <div
                  style={{
                    width: "10rem",
                    height: "10rem",
                    marginRight: "1.5rem",
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
                    src={`https://image.tmdb.org/t/p/w185/${person.profile_path}`}
                    alt=""
                  />
                </div>
                <p style={{ color: "white" }}>{person.name}</p>
              </section>
            );
        })}
      </section>

      <VideoModal
        modalOpen={modalOpen}
        closeModal={closeModal}
        youtubeId={youtubeId}
      />
      <ActorModal
        isActorModalOpen={isActorModalOpen}
        closeActorModal={closeActorModal}
        actorId={actorId}
      />
    </article>
  );
};

export default Details;
