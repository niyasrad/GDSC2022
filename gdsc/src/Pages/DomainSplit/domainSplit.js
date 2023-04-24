import "./domainSplit.css";
function DomainSplitPage() {
  return (
    <div className="domain-body">
      <div className="domain-heading">All Domains of Technology</div>
      <div className="domain-icons">
        <img className="domain-web" src="./assets/Web.svg" alt="Web" />
        <img className="domain-ml" src="./assets/ML.svg" alt="ML" />
        <img className="domain-uiux" src="./assets/UIUX.svg" alt="UIUX" />
        <img className="domain-cloud" src="./assets/Cloud.svg" alt="Cloud" />
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
