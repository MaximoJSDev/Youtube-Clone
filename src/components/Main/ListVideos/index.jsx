import { useState, useEffect } from "react";
import styles from "../main.module.css";

function index() {
  const [listvideos, setListvideos] = useState([]);
  // const [pageToken, setPageToken] = useState("");

  useEffect(() => {
    const getData = async (pageToken) => {
      let res = await fetch(
        "https://youtube.googleapis.com/youtube/v3/videos?pageToken=CBkQAA&part=snippet&part=statistics&chart=mostPopular&maxResults=32&key=AIzaSyDhgFhE73O9hPnctRkACm_X6cHm7kwXipM"
      );
      let data = await res.json();
      setListvideos(data.items);
      console.log(data);
    };
    getData();
  }, []);

  return (
    <div className={styles.main__contents}>
      <div className={styles.main__contents__grid}>
        {listvideos.map(({ id, statistics, snippet: video }) => (
          <div className={styles.video} key={id}>
            <img
              className={styles.video__thumbnail}
              src={
                video.thumbnails.maxres?.url || video.thumbnails.standard?.url
              }
              alt={video.title}
            />
            <div className={styles.video__details}>
              <img
                className={styles.video__details__avatar}
                src="https://picsum.photos/50/50?random=1"
                alt=""
              />
              <div className={styles.video__details__content}>
                <h3>{video.title}</h3>
                <span>{video.channelTitle}</span>
                <span>{statistics.viewCount} de vistas</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default index;
