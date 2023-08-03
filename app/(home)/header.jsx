import style from "./obj.module.css"
import HomeSvg from "./Home.svg"
import DiscordSvg from "./discord.svg"  
import TwitterSvg  from "./twitter.svg";

export default function HomeComponent( ){
  return (
    <main className="flex ">
      <div className={style.header}>
        <div className={style.firstHeaderCol}>
            <a href="/home">
            <div className={style.home} width={73.594} height={69.906}>
              <HomeSvg className={style.homesvg} />
            </div></a>
            <div className={style.frostColored}>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="65.9"  fill="none">
                <path d="M0 0H127V70H0V35V0Z" fill="#00FFE6"/>
                </svg>
            </div>
            <div className={style.frost}>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="65.9"  fill="none">
                <path d="M0 0H811V70H0V35V0Z" fill="white" fillOpacity="0.1"/>
                </svg>
            </div>
        </div>
        <DropDown />
      </div>

    </main>
  );
}



// @flow

export function DropDown() {
  return (
    <div className={style.secondHeaderCol}>
      <div className={ style.ddoptions } >
        <div className={style.ddcover}><div className={style.ddtext}> ABOUT</div><small>001</small> </div>
          
          <div className={style.ddcover}><div className={style.ddicon}>
            <DiscordSvg />
          </div><small>003</small></div>

          <div className={style.ddcover}><div className={style.ddicon}>
            <TwitterSvg />
          </div><small>003</small></div>
          
          <div className={style.ddcover}><div className={style.ddtext}> LAUNCH UNIVERSE </div><small>004</small> </div>
      </div>
      <div className={style.ddbtn } >
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="47" height="10" viewBox="0 0 47 10" fill="none">
            <path d="M47 1H1.24513e-06M47 9H7.70988" stroke="white" strokeOpacity="0.5" strokeWidth="0.5"/>
          </svg>
        </div>
      </div>
    </div>
  );
};


