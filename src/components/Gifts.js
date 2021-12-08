import img1 from "../img/Rectangle.png";
import img2 from "../img/Rectangle-1.png";
import GiftCard from "./GiftCard";

function Gifts() {
  return (
    <div className="gifts">
      <h2 className="title">Gifts for all Occasions</h2>
      <p className="subtitle">
        “Try our blog to find the best tips and tricks to select your gift”
      </p>

      <div className="gifts-container">
        <GiftCard imgURL={img1} title="Birthday" />
        <GiftCard imgURL={img2} title="Anniversary" />
      </div>
    </div>
  );
}

export default Gifts;
