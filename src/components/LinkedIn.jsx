import LinkedInImg from "../assets/LinkedIn_Logo.svg";

const LinkedIn = () => {
  return (
    <a href="https://www.linkedin.com/in/bryson-chavis" alt="link to Linked In">
      <img
        src={LinkedInImg}
        alt=""
        title="Bryson's LinkedIn"
        height="38"
        width="38"></img>
    </a>
  );
};

export default LinkedIn;
