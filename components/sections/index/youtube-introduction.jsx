// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";

// Section scss
import about from "../../../styles/sections/index/about.module.scss";
import hero from "../../../styles/sections/index/hero.module.scss";

const YoutubeVideo = ({ videoId }) => {
  return (
    <Section classProp={hero.section}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Video Introduction"
          preTitle="Get to know me!"
          subTitle=""
        />
        <section className={about.content}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube video"
            />
          </div>
        </section>
      </Container>
    </Section>
  );
};

export default YoutubeVideo;
