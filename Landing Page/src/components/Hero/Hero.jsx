import './Hero.css'
import arrow_btn from '../../Assets/arrow_btn.png'
import play_icon from '../../Assets/play_icon.png'
import pause_icon from '../../Assets/pause_icon.png'


function Hero({ setplayStatus, playStatus, heroData, heroCount, setheroCount }) {
  return (
    <div className='hero'>
      <div className="hero-text">
       <p>{playStatus==false?heroData.text1:''}</p>
       <p>{playStatus==false?heroData.text2:''}</p>
      </div>
      <div className={playStatus===false?'hero-explore':'hidden'}>
        <p>Explore the feature</p>
        <img src={arrow_btn} style={{ cursor: 'pointer' }} />
      </div>
      <div className="hero-dot-play">
        <ul className={playStatus===false?'hero-dots':'hidden'}>
          <li onClick={() => setheroCount(0)} className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => setheroCount(1)} className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => setheroCount(2)} className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}></li>
        </ul>
        <div className={playStatus===false?'hero-play':'hero-play-center'}>
          <img
            src={playStatus === false ? play_icon : pause_icon}
            onClick={() => {
              setplayStatus(!playStatus)
            }}
          />
          <p>{playStatus==false?'Play':'Pause'} the video</p>

        </div>
      </div>
    </div>
  )
}

export default Hero;
