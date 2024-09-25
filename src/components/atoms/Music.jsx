import { useState, useEffect } from "react";
import './Music.css';
import PauseSvg from './../svgs/PauseSvg';
import PlaySvg from './../svgs/PlaySvg';
import PropTypes from "prop-types";

const useAudio = url => {
  const [song] = useState(new Audio(url));
  const [play, setPlay] = useState(false);

  const toggle = () => {
    return setPlay(!play)
  };

  useEffect(() => {
      play ? song.play() : song.pause();
    },
    [play, song]
  );

  useEffect(() => {
    song.addEventListener('ended', () => setPlay(false));
    return () => {
      song.removeEventListener('ended', () => setPlay(false));
    };
  }, [song]);

  return [play, toggle];
};

const Music = (props) => {
  const [playMusic, setMusic] = useAudio(props.url);
  useEffect(() => {
    console.log(playMusic);
  }, [playMusic]);

  return <div className="circle-container-music" onClick={setMusic}>
    <div className="circle-music">
      <span>
        { playMusic && <PauseSvg fill="var(--lilac)" width="12" height="12" /> }
        { !playMusic && <PlaySvg fill="var(--lilac)" width="12" height="12" /> }
      </span>
    </div>
    <div style={{marginRight: '8px'}}>
      { playMusic ? "PAUSAR" : "REPRODUCIR" }
    </div>
  </div>
  ;
};

Music.propTypes = {
  url: PropTypes.string.isRequired,
}
export default Music;

