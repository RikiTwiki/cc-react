// import img1 from "../img/Backgroud.png";
// import img3 from "../img/Backgroud.png";
import imgURL from "../img/Background.png";
import imggURL from "../img/Background-1.png";

function AboutUs() {
  return (
    <main>
      <div className="HeroSideImageRight">
        <div className="con1">
          <p>Find a gift for your wife or girlfriend</p>
          <h2>
            Struggling to find a gift for your wife or girlfriend? No problem!
          </h2>
          <button className="ConBtn">Find gift now</button>
        </div>
        <div className="con2">
          <div className="img1">
            <img src={imgURL} alt="" />
          </div>
        </div>
      </div>
      <div className="HeroSideImageLeft">
        <div className="con3">
          <div className="img2">
            <img src={imggURL} alt="" />
          </div>
        </div>
        <div className="con4">
          <p>How we work</p>
          <h2>
            We’ve actually already asked hundreds of women what they want, and
            made a database with the results. All you have to do is take our
            short survey that only takes seconds, and our proprietary algorithm
            will match you with a few perfect gift options.
          </h2>
          <button className="ConBtn1">Learn More</button>
        </div>
      </div>
    </main>
  );
}

export default AboutUs;
