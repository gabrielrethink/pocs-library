import { useEffect, useState } from "react";
import styles from "../styles/progressBar.module.css";

const progressBar = () => {
  const [loomVideo, setLoomVideo] = useState(0);
  const [classList, setClassList] = useState("list_hide");
  const [user, setUser] = useState({
    name: "John Doe",
    course: -1,
  });

  const videos = [
    {
      title: "video 01",
      url: "https://www.loom.com/embed/60ec2f5c18fa4576b8dd0bd59eb02a34",
      comments: [
        { name: "Gabriel", comment: "This is a comment" },
        { name: "Fernando", comment: "Video Top" },
      ],
      watched: false
    },
    {
      title: "video 02",
      // url: "https://www.loom.com/embed/9f5183473ba74c3aaa3a6fa557054718",
      comments: [],
      watched: false
    },
    {
      title: "video 03",
      //  url: "https://www.loom.com/embed/1d9a969717f543d8894ee5d0f7cab4e8",
      comments: [],
      watched: true
    },
  ];

  const percentual = () => {
    const videosWhatched = videos.filter((video) => {
      if (video.watched) {
        return video
      }
    })

    const percentual = Math.floor((videosWhatched.length / videos.length) * 100);
    return percentual;
  }

  const onClickSetVideo = (video: number) => {
    console.log(video);
    setLoomVideo(video);
    if (video > user.course) {
      setTimeout(() => {
        setUser((prevUser) => ({ ...prevUser, course: video }));
      }, 1000);
    }
  };

  const onClickModule = () => {
    if (classList === "list_hide") {
      setClassList("list");
    } else {
      setClassList("list_hide");
    }
  }

  return (
    <>
      <div className={styles.container}>
        <iframe
          className={styles.video}
          src={videos[loomVideo].url}
          title="Loom 01"
        ></iframe>
        <div className={styles.accordions}>
          <div className={styles.accordion_item}>

            <div onClick={onClickModule} className={styles.module}>Modulo 1</div>

            <ul className={styles.classList}>
              {videos.map((video, index) => (
                <li key={index} className={styles.listItem}>
                  <button className={styles.btn} onClick={() => onClickSetVideo(index)}>
                    {video.title}
                  </button>
                  <input
                    type="checkbox"
                    name="watched"
                    id="01"
                    defaultChecked={index <= user.course}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <br />
      </div>
      <div className={styles.comments}>
        <h2>Comentarios</h2>
        {videos[loomVideo].comments &&
          videos[loomVideo].comments.map((comment, index) => (
            <div className={styles.comment} key={index}>
              <h1> {comment.name}</h1>
              <p> {comment.comment}</p>
            </div>
          ))}
      </div>
      <div className={styles.container_progresso}>
        <div className={styles.progresso}>
          <div className={styles.barra_progresso} style={{ width: `${percentual()}%` }}>
            <span >{`${percentual()}%`}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default progressBar;