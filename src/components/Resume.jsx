// import pdf from "../assets/resume.pdf";

const Resume = () => {
  return (
    <a href="/resume">
      <button
        id="resume"
        className="btn btn-outline-primary mx-2"
        title="Bryson's resume">
        <div>
          {/* I have a div here if I want to ever add a picture for the resume icon */}
          <span>Resume</span>
        </div>
      </button>
    </a>
  );
};

export default Resume;
