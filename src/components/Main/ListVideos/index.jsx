import { useState, useRef } from "react";
import styles from "../main.module.css";
import Channel from "./Channel";
import { useInView } from 'react-intersection-observer';

const httpVideo = "https://youtube.googleapis.com/youtube/v3/videos?";

function index() {
  const [listvideos, setListvideos] = useState([]);
  const [pageToken, setPageToken] = useState();
  const countVideos = useRef();
  const  { ref , inView , entry  }  =  useInView();

  const getVideos = async () => {
    // Videos
    let res = await fetch(httpVideo + new URLSearchParams({
      key: import.meta.env.VITE_API_KEY,
      part: ["snippet","statistics"],
      chart: "mostPopular",
      maxResults: 10,
      regionCode: "MX",
      pageToken: pageToken ? pageToken: ""
    }))
    let data = await res.json();
    setPageToken(data.nextPageToken);
    setListvideos([...listvideos, ...data.items]);
  }

  if (inView && entry?.isIntersecting && countVideos.current.childElementCount < 200) {
    getVideos();
  }

  return (
    <section className={styles.main__contents}>
      <div className={styles.main__contents__grid} ref={countVideos}>
        {listvideos.map(({ id, statistics, snippet: video }) => {
            return (
            <article className={styles.video} key={id}>
              <a href={`https://youtube.com/watch?v=${id}`} className={styles.video__link}>
                <img
                  className={styles.video__thumbnail}
                  src={
                    video?.thumbnails.maxres?.url || video.thumbnails.standard?.url
                  }
                  alt={video.title}
                />
                <div className={styles.video__details}>
                  <Channel id={video.channelId}/>
                  <div className={styles.video__details__content}>
                    <h3>{video.title}</h3>
                    <span>{video.channelTitle}</span>
                    <span>{statistics.viewCount} de vistas</span>
                  </div>
                </div>
              </a>
            </article>
          )}) 
        }
        <div ref={ref}>endpoint</div>
      </div>
    </section>
  );
}

export default index;
