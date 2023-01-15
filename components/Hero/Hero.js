import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles"
import classNames from "classnames";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  MainTitle,
  SubTitle,
} from "./HeroElements";

export default function Hero(props) {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src="/videos/bgvideo.mp4">
          
        <HeroContent>
          <SubTitle>
            Providing you with Smart Energy, the right way.
          </SubTitle>
        </HeroContent>
          
        </VideoBg>
      </HeroBg>
     
    </HeroContainer>
  );
};
