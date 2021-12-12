import img1 from "../img/Rectangle.png";
import img2 from "../img/Rectangle-1.png";
import img3 from "../img/Rectangle-2.png";
import img4 from "../img/Rectangle-3.png";
import img5 from "../img/Media.png";
import img6 from "../img/1.png";
import img7 from "../img/2.png";
import img8 from "../img/3.png";
import img9 from "../img/4.png";
import img10 from "../img/5.png";

import GiftCard from "./GiftCard";

function Gifts() {
  return (
    <div className="gifts">
      <h2 className="title">Gifts for all Occasions</h2>
      <p className="subtitle">
        “Try our blog to find the best tips and tricks to select your gift”
      </p>
      <div className="gifts-container">
        <div>
          <GiftCard imgURL={img1} title="Birthday" />
        </div>
        <div>
          <GiftCard imgURL={img2} title="Anniversary" />
        </div>
        <div>
          <GiftCard imgURL={img3} title="Valentine's Day" />
        </div>
        <div>
          <GiftCard imgURL={img4} title="Christmas" />
        </div>
      </div>
      <div className="gifts1">
        <p>Ready to get started?</p>
        <h2>Sign up or contact us</h2>
        <button>Find gift now</button>
        <div className="button1">
          <button>How it works</button>
        </div>
      </div>
      <div className="gifts2">
        <p>Our Best Blogs Ever</p>
        <h2>
          “Try our blog to find the best tips and tricks to select your gift”
        </h2>
        <div className="blockWithImg">
          <div className="block1">
            <img src={img5} />
          </div>
          <div className="block2">
            <p>Mr. John Doe</p>
            <h1>The best way to wish your wife</h1>
            <a href="##">Read More ></a>
          </div>
        </div>
        <div className="gif">
          <div className="gifts3">
            <h1>Database to find the gifts for your girlfriend</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore...
            </p>
            <a href="##">Read More > </a>
          </div>
          <div className="gifts4">
            <p>
              <h1>Database to find the gifts for your girlfriend</h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore...
            </p>
            <a href="##">Read More > </a>
          </div>
        </div>
      </div>
      <div className="gifts5">
        <p>logo</p>
        <div className="btn">
          <a href="##">Home</a>
          <a href="##">About</a>
          <a href="##">Service</a>
          <a href="##">Blog</a>
        </div>
        <div className="border"></div>
        <div className="icons">
          <a href="#">
            <img src={img6}></img>
          </a>
          <a href="#">
            <img src={img7}></img>
          </a>
          <a href="#">
            <img src={img8}></img>
          </a>
          <a href="#">
            <img src={img9}></img>
          </a>
          <a href="#">
            <img src={img10}></img>
          </a>
        </div>
        <h2>© 2010 — 2020 Privacy — Terms</h2>
      </div>
    </div>
  );
}

export default Gifts;
