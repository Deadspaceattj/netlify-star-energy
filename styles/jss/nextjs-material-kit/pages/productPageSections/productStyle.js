import imagesStyles from "../../imagesStyles";
import { title } from "/styles/jss/nextjs-material-kit.js";

const productStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  ...imagesStyles,
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    color: "#131313",
    fontFamily: "Ubuntu"
  },
  description: {
    color: "#131313"
  }
};

export default productStyle;
