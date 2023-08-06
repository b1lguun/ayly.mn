import "./home.scss";
import React, { useEffect, useState } from "react";
import AnimatedPage from "../animatedpage";
import Navbar from "../navbar/navbar";

export function Home({ offset }) {
  const [val,setVal]=useState('')
  const data=[
      "Улаанбаатар",
      "Архангай",
      "Баян-Өлгий",
      "Баянхонгор",
      "Булган",
      "Говь-Алтай",
      "Говьсүмбэр",
      "Дархан-Уул",
      "Дорноговь",
      "Дорнод",
      "Дундговь",
      "Завхан",
      "Орхон",
      "Өвөрхангай",
      "Өмнөговь",
      "Сүхбаатар",
      "Сэлэнгэ",
      "Төв",
      "Увс",
      "Ховд",
      "Хөвсгөл",
      "Хэнтий"
  ]
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        document.body.style.textEmphasisColor = "#0d2a16";
      } else {
        document.body.style.textEmphasisColor = "#ffffff";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatedPage>
      <div className="home">
        <Navbar offset={offset} />
        <div className="home-container">
          <div className="home-container-left">
            <h1>Таны аяллын хөтөч</h1>
            <p>Монгол улсын 21 аймгийн аялал жуулчлалын цогцолбор газаруудын мэдээллийг нэг доороос авах боломжтой вебсайт.</p>
            <a href="https://www.instagram.com/ayly.mn_/" className="home-button">Learn more</a>
          </div>
          <div className="home-container-right">
            <div className="where">
            <h1>Хаашаа аялах вэ?</h1>
            </div>
            <div className="right-from">
              <p>Хаанаас:</p>
              <input list="data" onChange={(e)=>setVal(e.target.value)}  placeholder="Одоо байгаа байршилаа оруулна уу."/> 
                <datalist id="data">
                {data.map((op)=><option>{op}</option>)}
                </datalist>

            </div>
            <div className="right-from">
              <p>Хаашаа:</p>
              <input list="data" onChange={(e)=>setVal(e.target.value)}  placeholder="Хаашаа аялахаар төлөвлөж байгаагаа оруулна уу."/>
              <datalist id="data">
                {data.map((op)=><option>{op}</option>)}
                </datalist>
            </div>
            <div className="gen-but">
            <button className="generate">Generate</button>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Home;
