import "./marketing.css";
import hatImage from "./../assets/hatImage.png";
import marketingImage from "./../assets/marketing-image.svg";
function MarketingPage() {
  return (
    <div className="marketing-body">
      <div className="marketing-header">Marketing and Pitching ⚡️</div>
      <div className="cap-icon">
        <img src={hatImage} alt="Hat" />
      </div>
      <div className="marketing-content">
        <img src={marketingImage} alt="Marketing"></img>
        <div className="marketing-description">
          At ProductForge, we understand that building a great product is only
          half the battle. That's why we also focus on teaching you how to
          market and pitch your product to potential customers and investors.
          Learn how to create compelling pitches, conduct market research, and
          develop effective marketing strategies. You'll get the chance to
          showcase your skills in front of a panel of experts and compete for
          prizes.
        </div>
      </div>
    </div>
  );
}

export default MarketingPage;
