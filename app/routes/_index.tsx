import type { MetaFunction } from "@remix-run/node";
import { LiveReload } from "@remix-run/react/dist/components";
import { Masonry } from "masonic";
import { Badge, Button, CardGroup } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Blurb from "~/components/Blurb";
import Hero from "~/components/Hero";
import NavigationBar from "~/components/NavigationBar";
import ProjectCard from "~/components/ProjectCard";
import { ProjectCardData } from "~/components/ProjectCard";
import useWindowScroll from "@react-hook/window-scroll";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { ClientOnly } from "remix-utils/client-only";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";
import { Scrollspy } from "@makotot/ghostui";
import { Suspense, useRef } from "react";
import ScrollSpy from "react-ui-scrollspy";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, timelineItemClasses, TimelineSeparator } from "@mui/lab";
import * as styled from "@emotion/styled";
import type {} from '@mui/lab/themeAugmentation';
import WorkExpr from "~/components/WorkExpr";
import { Card } from "@mui/material";
import { Canvas, extend } from "@react-three/fiber";
import { CuboidCollider, Physics, RigidBody } from "@react-three/rapier";
import { Box, Torus, Text3D } from "@react-three/drei";
import { FontLoader, TextGeometry } from "three/examples/jsm/Addons.js";
import AntonSC from "~/../public/Anton SC_Regular.json";

import { Mesh, MeshLambertMaterial } from "three";
import HobbySection, { Hobby } from "~/components/HobbySection";

extend({TextGeometry});

export const meta: MetaFunction = () => {
  return [
    { title: "Joseph O'Dowd" },
    { name: "description", content: "Joseph O'Dowd's portfolio, bio, and hobbies" },
  ];
};

export default function Index() {

  const font = new FontLoader().parse(AntonSC);

  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null)
  ];
  return (
      <div style={{display:"relative"}} data-bs-spy="scroll" data-bs-target="#main-nav" data-bs-offset="0">
        <ClientOnly>
          {()=><>
        <ScrollSpy useBoxMethod={true} offsetBottom={200} offsetTop={-100} activeClass="active">
          <div id="about"></div>
      <Hero miny="720" top="true" image="url('bird.webp')">
        <Blurb position="left" title="Software Developer" className="mt-5 mt-lg-0" otherHalf={<ClientOnly>{()=><Timeline position="left" style={{justifySelf:"end"}} className="mt-5 mt-sm-0" sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}>
        <WorkExpr
          company="Northeast Generals"
          date="July 2023 - ongoing"
          description="Developing and maintaining the organization website using Go and HTML."
        />
        <WorkExpr
          date="August 2022 - ongoing"
          description="Tutoring with complex JavaScript game projects."
        />
        <WorkExpr 
          date="September 2020 - February 2021"
          company="Gadget Techs"
          description="Developing a ticketing application with Flutter and .NET."
        />
        <WorkExpr 
          date="Summers 2018 - 2020"
          company="Hanover Public Schools District"
          description="ABA tutor for a summer school program that teaches life skills."
        />
        </Timeline>}</ClientOnly>}>
        
          <p>Entering my life as a hobby, code has been a passion of mine since middle school. I achieved a Bachelor&apos;s degree in Computer Science from the University of Massachusetts Dartmouth with highest honors and the CIS department&apos;s &quot;Outstanding Transfer Student&quot; award. Using the skillset I&apos;ve acquired from institutional, experiential, and independent learning, I finish projects of all sizes with a variety of frameworks and libraries.</p>
          <Button href="mailto:josephodowd-dev@outlook.com">Contact</Button>
          <Button className="mx-3 btn-secondary" href="/ODowd Resume 6-11-2024 Public.pdf">
            Resume
          </Button>
        </Blurb>
        
        {/*<Container>
          <div className="col-lg-6">
            <h1 className="text-light">Software Developer</h1>
            <p>Entering my life as a hobby, software development has been a passion of mine since middle school. I achieved a Bachelor&apos;s degree in Computer Science from the University of Massachusett Dartmouth with highest honors and the CIS department&apos;s &quot;Outstanding Transfer Student&quot; award. Using the skillset I&apos;ve acquired from institutional, experiential, and independent learning, I finished dozens of full-stack projects with a variety of frameworks and libraries.</p>
            <Button href="develop">
              Contact
            </Button>
            <Button className="mx-3 btn-secondary" href="develop">
              Resume
            </Button>
          </div>
        </Container>*/}
      </Hero>
      <div id="projects"></div>
      <Hero miny={500} image="url('leaf.webp')">
        <Blurb title="Projects" position="center" align="left">
          <>
          <p>Below, you can find some of the projects that I worked on over the years:</p>
          </>
        </Blurb>
        <Container>
          <div className="col" data-bs-spy="scroll">
            {/*masonryProjects(null)*/}
            {/*<Masonry items={projects} render={ProjectCard} // Adds 8px of space between the grid cells
          columnGutter={8}
          // Sets the minimum column width to 172px
          columnWidth={172}
          // Pre-renders 5 windows worth of content
          overscanBy={5}
            />*/}
            <ClientOnly>
              {()=>
            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 900: 2, 1280: 3}} gutter="100px">
              <Masonry>
            <ProjectCard
              title="Portfolio Website"
              languages={["TypeScript", "HTML", "CSS"]}
              frameworks={["React", "Bootstrap", "Remix"]}
              description="The page you are on now."
            ></ProjectCard>
            <ProjectCard
              image="minigolf.webp"
              title="I Can Make A Golf Course"
              languages={["C#"]}
              frameworks={["Unity"]}
              description="WIP. A multiplayer game where players create golf courses and play them. Losers of each round get powerups; winners get more build pieces."
              />
            <ProjectCard
              title="University Capstone"
              languages={["Python", "HTML", "CSS", "SQL"]}
              frameworks={["Plotly", "Dash", "PostgreSQL", "Cytoscape.js"]}
              description="My university capstone project was for a client; it was a collaboration between myself and two other students. My contribution to the project was the pipeline from realtime data input, to database, to analysis (to database), to visualization and display. Millions of rows are accounted for with every action; a table allows for complete filtering and sorting, while the visualization pane allows for pie charts, histograms, and node graphs on any column. The web UI was prototyped in Figma before being created and finely tuned in Dash, HTML, and CSS"
              ></ProjectCard>
            <ProjectCard
              image="ngsite.webp"
              title="Northeast Generals Website"
              languages={["Go", "SQL", "HTML", "CSS"]}
              frameworks={["Bootstrap", "RSS", "Atom", "PostgreSQL"]}
              description="The current iteration of the Northeast Generals website is a custom-built solution using Go. It was built this way because there is significant content scraping and aggregation from their other websites; it could be considered an information hub, focusing on up-to-date news and game schedules. I am currently reworking the website with Bootstrap into a fairly static organization site."
              ></ProjectCard>
            <ProjectCard 
              image="wormgame.webp" 
              gif="worm.gif"
              title="Worm Game"
              languages={["C++", "GLSL"]}
              frameworks={["SFML"]}
              description="Like the game &quot;Snake&quot;, but your character just splits when it collides with itself. This project taught me a lot about designing complex systems, as all interactions, behaviors, inputs, and physics were written from scratch. The cost of these are brought down with a chunking system; offscreen entities are not rendered and receive fewer logic calls."
              ></ProjectCard>
            <ProjectCard
              image="hockeygame.webp"
              gif="hockey.gif"
              title="Hockey Game"
              languages={["C++"]}
              frameworks={["SFML"]}
              description="My first project with SFML, this is a multiplayer game where players must bounce a ball off walls and into platforms to score points. The ball has a random color each time, and it leaves streaks that persist throughout the game. Players may slam into each other to steal the ball. Being my first game project with C++ and SFML, I learned a lot about engine design. All the beginner mistakes mean it's overdue for a rework."
              ></ProjectCard>
            <ProjectCard
              image="pirategame.webp"
              gif="pirate.gif"
              title="Pirate Game"
              languages={["C#", "Ink"]}
              frameworks={["Unity"]}
              description="A group project for school, you play as a side-scrolling pirate and a top-down pirate ship in a simulated, procedural world. I contributed the systems for ship movement, ship combat, terrain generation, AI pathfinding, dialogue, and the economy."
              ></ProjectCard>
              </Masonry>
            </ResponsiveMasonry>
}
            </ClientOnly>
          </div>
        </Container>
      </Hero>
      <div id="hobbies"></div>
      <Hero miny={512} image="url(moss.webp)">
          <Blurb title="Hobbies">
          </Blurb>
          <Container>
          <HobbySection>
              <Hobby name="Songwriting">
                Writing songs with an acoustic guitar and producing them in Ableton. My primary goal is to experiment and find sounds I like.
              </Hobby>
              <Hobby name="Video Games">
                I&apos;m big on singleplayer narrative experiences, such as quirky RPGs and indie horror. Driving sims are another interest.
              </Hobby>
              <Hobby name="Horror Movies">
                In addition to horror games, horror movies are a major interest of mine. &quot;Bad&quot; horror movies are especially entertaining.
              </Hobby>
              <Hobby name="Bad Jokes">
                How did the kangaroo ask for more banana on soup night? More-soup-peel.
              </Hobby>
            </HobbySection>
            </Container>
      </Hero>
      <div id="contact"></div>
      <Hero miny={720} image="url(leaves.webp)">
        <Blurb title="Contact Me" align="start" position="center" className="bg-dark" style={{padding:32, borderRadius:15}}>
          <p>I&apos;m currently open to work. If my skillset is what you need, I&apos;d be enthused to hear from you. More than code, I like to collaborate with people and share ideas.  </p>
          <p>Want to get in touch? Here&apos;s my e-mail, LinkedIn, and GitHub:</p>
          <Button className="mr-2 btn-primary"  href="mailto:josephodowd-dev@outlook.com">E-Mail</Button>
          <Button className="mx-2 btn-secondary" href="https://www.linkedin.com/in/joseph-o-dowd-427a701a6/">LinkedIn</Button>
          <Button className="mx-2 btn-secondary" href="https://github.com/joeod1/">GitHub</Button>
        </Blurb>
      </Hero>
      </ScrollSpy>
</>}
      </ClientOnly>
      </div>
  );
}
