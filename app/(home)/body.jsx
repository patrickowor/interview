import style from "./obj.module.css"
import LinesSvg from "./Frame 21115.svg" 
import Image from "next/image";
// import sideimage from ""

export function BodyComponent() {
  return (
    <section className={style.margin}>
      <div className={style.optionFrame}>
        <div className={style.boxParent} > <div className={style.box} /><div className={style.box2} />  MAPS</div>
        <div className={style.boxParent}> <div className={style.box} /><div className={style.box2} /> MISSIONS</div>
        <div className={style.boxParent}> <div className={style.box} /><div className={style.box2} /> CHARACTERS</div>
        <div className={style.boxParent}> <div className={style.box} /><div className={style.box2} /> LOADOUTS</div>
        <div className={style.boxParent}> <div className={style.box} /><div className={style.box2} /> EVENTS</div>
      </div>

        <section>

            <div className={style.union}>
                <div className={style.unionsvg} >
                    <Image fill  src={"/images/MainUnionGroup.png"} alt="img" /> 
                </div>
            </div>

            <div className={style.constructDiv}>
                <div className={style.constructSvg}>
                </div>
                
            </div>

            <div className={style.blur}/><div className={style.blur} /> <div className={style.blurCircle}></div>

            <div className={style.immersiveDiv}>
                <p>001</p>
                <div className={style.immersive}>
                    <div className={style.immersivesvg}></div>
                </div>
            </div>
            <div className={style.metaDiv}>
                <p>002</p>
                <div className={style.meta}>
                    <div className={style.metasvg}></div>
                </div>
            </div>




        </section>

      <div className={style.bottomDiv}>
        <div className={style.bottomdivlines}>
            <LinesSvg />
        </div> <div className={style.bottomdivtext}>
        UTILIZING METAFI, UE5, AND WEB3 TECHNOLOGY TO CREATE A <br/> SOCIAL AND IMMERSIVE GAMING METAVERSE.
        </div>
      </div>


    </section>
  );
};