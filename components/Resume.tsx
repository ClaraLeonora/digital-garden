import { Timeline } from "./ui/timeline";
import { PinContainer } from "./ui/pin";

const timelineData = [
  {
    title: "Projects",
    content: (
      <div className="flex flex-col space-y-12 mb-16">
        <PinContainer
          title="Care Pack Application DEV"
          href="https://github.com/ClaraLeonora/Care-Pack.git" // Direct link to the image
          image="/image/care-pack.png"
          alt="A screenshot of the Care Pack application interface, showcasing resources for food, housing, and clothing support."
        >
          A centralized location for resources addressing food, housing, and clothing insecurity.
        </PinContainer>        
        
        <PinContainer
          title="LLMs as Logic Tutors"
          href="https://drive.google.com/file/d/1TSjzbK1p-nuHpM4XkMNoNU3CGttP1B46/view?usp=sharing" // Direct link to the image
          image="/image/logic-tutor.png"
          alt="A screenshot of the Deep Thought Logic Tutor interface, highlighting its interactive tools for helping students solve logic problems effectively."
        >
          Enhancing student success by working on integrating an LLM into the Deep Thought Logic tutor.
        </PinContainer>

        <PinContainer
          title="NASA Mission Concept Scientist"
          href="https://drive.google.com/file/d/14WinDj3W8Hc4bWjpseWxRNl_xM4AnITu/view?usp=sharing" // Example link
          image="/image/lspace.png"
          alt="An image of the NASA L'SPACE Mission Design project location on the Lunar surface."
        >
          Co-developed a 199 page lunar surface Mission Design to analyze lunar volatiles.
        </PinContainer>

        <PinContainer
          title="Disjunctive Normal Form Proofer"
          href="https://github.com/ClaraLeonora/Proof-Solver.git" // Example link
          image="/image/dnf-algo.png"
          alt="Python code implementation of the Disjunctive Normal Form (DNF) algorithm, designed to solve logical expressions efficiently."
        >
          Solves propositional logic proofs with a Disjunstive Normal Form algorithm.
        </PinContainer>
      </div>
    ),
  },
  {
    title: "Outreach",
    content: (
      <div className="flex flex-col space-y-12 mb-16"> {/* Adds large vertical space */}
        <PinContainer
          title="Accessible Computing Education"
          href="https://docs.google.com/presentation/d/1aXHUipZc9SJVp8TIaWVywAUDykX37rUE/edit?usp=sharing&ouid=103492514086297183847&rtpof=true&sd=true" // Direct link to the image
          image="/image/STARS-outreach.png"
          alt="A group photo of the NC State STARS AI outreach team at Reach for the Stars! Be a Star! STEM and Resource Fair for students with disabilities."
        >
          Designed activities to accommodate diverse educational acessibility needs.
        </PinContainer>

        <PinContainer
          title="Outreach Coordinator & Curriculum Developer"
          href="https://www.canva.com/design/DAF_yQ2HKK0/Zts2mMBD3VCauEM2o5vK7A/edit?utm_content=DAF_yQ2HKK0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" // Direct link to the image
          image="/image/byte-sized-builder.png"
          alt="A PowerPoint presentation showcasing an interactive curriculum designed to teach 5th graders about the intersection of AI and robotics."
        >
           Developed and delivered a dynamic curriculum for 5th-grade robotics enthusiasts.
        </PinContainer>
      </div>
    ),
  },
  {
    title: "Education",
    content: (
      <div className="flex flex-col space-y-12 mb-16"> {/* Adds large vertical space */}
        <PinContainer
          title="NC State University"
          image="/image/belltower.png"
          href="https://www.csc.ncsu.edu"
          alt="A photograph capturing the iconic NC State Belltower, a symbol of the university's heritage and pride."
        >
          Grand Challenges Scholar | STARS AI Scholar | Fall 2024 Symposium Panelist | Conference Planning Committee | Student Leadership
        </PinContainer>

        <PinContainer
          title="Intro to Front-End Development"
          href="https://coursera.org/share/6a0b3fe6768ef7859db9dfe32a914d68" // Direct link to the image
          image="/image/front-end-cert.png"
          alt="An image of the Meta 'Intro to Front-End Development' certificate, showcasing completion of the course."
        >
           Certificate of Completion
               
        </PinContainer>
      </div>
    ),
  },
];

export default function Resume() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">My Journey</h1>
      <Timeline data={timelineData} />
    </div>
  );
}
