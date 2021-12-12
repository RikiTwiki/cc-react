function GiftCard({ imgURL, title }) {
  return (
    <div className="gifts-card">
      <img src={imgURL} alt="" />
      <p className="card-title">{title}</p>
      <button>See More ›</button>
    </div>
  );
}

export default GiftCard;
