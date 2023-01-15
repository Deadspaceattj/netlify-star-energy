import imagesStyles from "../imagesStyles";
import { container, title } from "/styles/jss/nextjs-material-kit.js";

import imagesStyle from "/styles/jss/nextjs-material-kit/imagesStyles.js";

const productPageStyle = {
  container,
  product: {
    textAlign: "center",
    "& img": {
      alignSelf: "center",
      display: "flex",
      marginLeft: "auto",
      marginRight:"auto",
      maxWidth: "100%",
      
    }
  },
  ...imagesStyles,
  description: {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "600px",
    color: "#999",
    textAlign: "left !important",
    marginBottom: "2rem"
  },
  name: {
    alignSelf: "center",
    display: "flex",
    marginLeft: "auto",
    marginRight:"auto",
    maxWidth: "100%",
    flexDirection: "column",
    margin: "0",
    
  },
  ...imagesStyle,
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "-2rem",
    textDecoration: "none",
    fontFamily: "Ubuntu"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  navWrapper: {
    margin: "20px auto 50px auto",
    textAlign: "center"
  }
};

export default productPageStyle;
