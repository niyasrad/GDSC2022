import "./domainSplit.css";
import MLimg from "../../assets/ML.svg";
import WEBmg from "../../assets/Web.svg";
import UIUXimg from "../../assets/UIUX.svg";
import CLOUDimg from "../../assets/Cloud.svg";
function DomainSplitPage() {
  return (
    <div className="domain-body" id='domains'>
      <div className="domain-body__content">
        <h1 className="domain-heading">All Domains of Technology</h1>
        <div className="domain-icons">
          <img className="domain-web" src={WEBmg} alt="Web" />
          <img className="domain-ml" src={MLimg} alt="ML" />
          <img className="domain-uiux" src={UIUXimg} alt="UIUX" />
          <img className="domain-cloud" src={CLOUDimg} alt="Cloud" />
        </div>
        <div className="domain-text">
          Discover the latest and most impactful technologies across all domains,
          including web, cloud, machine learning, and UI. Our experienced
          instructors will provide hands-on workshops that will take you through
          the complete development lifecycle of a product. You'll get exposure to
          industry-leading tools and methodologies, and learn best practices for
          building products that scale.
        </div>
      </div>
    </div>
  );
}

export default DomainSplitPage;
