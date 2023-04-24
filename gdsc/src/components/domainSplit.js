import "./domainSplit.css";
import webImage from "./../assets/Web.svg";
import mlImage from "./../assets/ML.svg";
import uiuxImage from "./../assets/UIUX.svg";
import cloudImage from "./../assets/Cloud.svg";

function DomainSplitPage() {
  return (
    <div className="domain-body">
      <div className="domain-heading">All Domains of Technology</div>
      <div className="domain-icons">
        <img className="domain-web" src={webImage} alt="Web" />
        <img className="domain-ml" src={mlImage} alt="ML" />
        <img className="domain-uiux" src={uiuxImage} alt="UIUX" />
        <img className="domain-cloud" src={cloudImage} alt="Cloud" />
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
  );
}

export default DomainSplitPage;
