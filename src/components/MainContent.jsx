import React from "react";
import styled from "styled-components";
// import pdf from "../assets/resume.pdf";
// import LinkedInImg from "../assets/LinkedIn_Logo.svg";
// import ResumeImg from "../assets/paper_folded.svg";
import EpicProfileImg from "../assets/epic-profile-picture.jpg";
import VolunteerHospital from "../assets/volunteerHosptial2017.jpg";
import ChemSummer from "../assets/summer2018.png";
import VandySummer from "../assets/vandy2019.jpeg";
import GettingConnected from "./GettingConnected";

const Background = styled.div`
  padding: 10% 20%;
`;
const Content = styled.p`
  text-align: left;
  border-color: #e2e8f0;
  font-weight: 250;
  font-size: x-large;
`;
const Header = styled.h1`
  border-bottom: 1px solid;
  border-color: #e2e8f0;
  padding-bottom: 0.5rem;
  font-weight: 500;
  text-align: left;
`;

const SecondaryHeader = styled.h4`
  border-bottom: 1px solid;
  border-color: #e2e8f0;
  padding-bottom: 0.5rem;
  font-weight: 500;
  text-align: left;
`;
const ImageContainer = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const ThirdHeader = styled.h6`
  border-bottom: 1px solid;
  border-color: #e2e8f0;
  padding-bottom: 0.5rem;
  font-weight: 500;
  text-align: left;
`;

const MainContent = () => {
  return (
    <Background>
      <Header style={{ textAlign: "center" }}>
        Hello, my name is Bryson Chavis
      </Header>
      <ImageContainer
        src={EpicProfileImg}
        alt="Bryson in his 'Epic' T-shift outside McAdams Hall"
        title="Bryson in his 'Epic' T-shift outside McAdams Hall"
      />
      <br></br>
      <br></br>
      <SecondaryHeader>What is there to know about me?</SecondaryHeader>
      <Content>
        Just want to connect with me?{" "}
        <a href="#connect">Click on the links below </a>
        <br />
        Don't like reading, but want to learn about me?{" "}
        <a href="https://www.youtube.com/watch?v=yVNxZoHSUDg&t=19s">
          Watch a video of me explaining my college career, and giving advice to
          future transfer students here.
        </a>{" "}
        I suggest 2.0x times speed. The slide presentation starts at 5 minutes.
        <br />
        <br />
        For everyone else, let me begin with my education. <br></br>I started
        college at the University of South Carolina Lancaster. I soon
        transferred to Clemson University to complete my undergraduate degree in
        Computer Science, BS.
      </Content>
      <SecondaryHeader>Before graduating</SecondaryHeader>
      <Content>
        I had several amazing opportunities during college. I knew the
        importance of internships, and I was fortunate enough to find internship
        opportunities during the summer time.
        <br />
        <br />
        <ThirdHeader>Summer 2017</ThirdHeader>
        My first internship was actually the summer before college. This first
        year before college, I volunteered in a hospital. Can you believe my
        first year of college I came in as a nursing major?!
        <ImageContainer
          src={VolunteerHospital}
          title="Bryson at the volunteers' luncheon 2017"
          alt="Bryson at the volunteers' luncheon 2017"
        />
        <br />
        <br />
        <ThirdHeader>Summer 2018</ThirdHeader>
        Before I say what I did,{" "}
        <a href="https://www.sciencedirect.com/science/article/abs/pii/S0040403918313315?via%3Dihub">
          go read about what I did here.
        </a>{" "}
        I worked under{" "}
        <a href="https://sites.google.com/site/cailiqingsheng/photos">
          Dr. Li Cai
        </a>
        : a Researcher at the University of South Carolina Lancaster. I
        primarily worked on column chromatography, NMR measurements, and other
        lab responsibilities.
        <ImageContainer
          src={ChemSummer}
          alt="Chemistry Lab at U S of C Columbia"
          title="Bryson in the Graduate Chemistry Lab at USofC Columbia"
          width="100%"
        />
        <br />
        <br />
        <ThirdHeader>Summer 2019</ThirdHeader>
        During the summer of 2019, I had my first internship outside of South
        Carolina! I am beyond fortunate for the opportunity I had at Vanderbilt
        University. The internship was sponsored by the National Science
        foundation (NSF). The NSF funds student research, and allows students to
        participate in Undergraduate Research Experiences (REU) around the US. I
        worked under{" "}
        <a href="https://www.vanderbiltem.com/team/michael-ward-md%2C-phd%2C-mba">
          Dr. Michael Ward
        </a>{" "}
        and{" "}
        <a href="https://www.vumc.org/dbmi/person/shilo-anders-phd">
          Dr. Shilo Anders
        </a>
        . You can read all about my summer at Vanderbilt under{" "}
        <a href="https://t.e2ma.net/message/to0qdf/12cgjjq">
          "Student Spotlight: Bryson Chavis"
        </a>{" "}
        in the DBMI monthly digest.
        <ImageContainer src={VandySummer} width="100%" />
        <br />
        <br />
        <ThirdHeader>Summer 2020</ThirdHeader>
        The summer of 2020 was my final internship opportunity. I participated
        in research every summer so far, and I wanted to find a corporate
        internship. Yet again, I found another amazing opportunity. <br />A{" "}
        <a href="http://www.m2mdtech.com/">
          startup based out of Atlanta Georgia
        </a>{" "}
        hired me as a Software Engineer for the summer. <br />
        My main responsibility was programming IoT devices in C.{" "}
        <a href="https://devopedia.org/programming-for-iot">
          You can learn more about IoT devices here
        </a>
        . I worked on Edge Devices.
      </Content>
      <br></br>
      <SecondaryHeader>After graduating</SecondaryHeader>
      <Content>Time will tell!</Content>
      <GettingConnected id="connect" />
    </Background>
  );
};

export default MainContent;
