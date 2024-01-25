import { useEffect,useState } from "react";
import styles from "../../main.module.css";

const httpChannel = "https://youtube.googleapis.com/youtube/v3/channels?";

function index({id}) {
  const [channelData,setChannelData] = useState();

  useEffect(()=> {
    fetch(httpChannel + new URLSearchParams({
      key: import.meta.env.VITE_API_KEY,
      id: id,
      part: "snippet"
    })).then(res => res.json()).then(data => {
      setChannelData(data.items[0].snippet);
    })
  },[])

  return (
    <a href={`https://youtube.com/${channelData?.customUrl}`}>
      <img
      className={styles.video__details__avatar}
      src={channelData?.thumbnails.default.url}
      alt={channelData?.title}
      />
    </a>
  )
}

export default index;