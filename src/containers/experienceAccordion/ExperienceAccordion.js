import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
// Static list renderer (no accordion)

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-accord">
        {(this.props.sections || []).map((section) => (
          <div className="accord-panel" key={section["title"]}>
            <h2
              style={{ color: theme.text, fontFamily: "Google Sans Regular" }}
            >
              {section["title"]}
            </h2>
            <div>
              {(section["experiences"] || []).map((experience, index) => (
                <ExperienceCard
                  key={index}
                  index={index}
                  totalCards={(section["experiences"] || []).length}
                  experience={experience}
                  theme={theme}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ExperienceAccordion;
