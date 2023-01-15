import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "/components/Header/Header.js";
import HeaderLinksLeft from "/components/Header/HeaderLinksLeft.js";
import HeaderLinksRight from "/components/Header/HeaderLinksRight.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import CustomInput from "/components/CustomInput/CustomInput.js";
import Button from "/components/CustomButtons/Button.js";

import styles from "/styles/jss/nextjs-material-kit/pages/contactPage.js";

const useStyles = makeStyles(styles);

export default function ContactUs(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        absolute
        color="transparent"
        rightLinks={<HeaderLinksRight />}
        leftLinks={<HeaderLinksLeft />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url('/img/bg7.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={10} md={10}>

              <div className={classes.contactPageStyle}>
                <div className={classes.section}>
                  <GridContainer justify="center">
                    <GridItem cs={12} sm={12} md={8}>
                      <h2 className={classes.title}>Contact Us</h2>
                      <h4 className={classes.description}>
                        Divide details about your product or agency work into parts. Write a
                        few lines about each one and contact us about any further
                        collaboration. We will responde get back to you in a couple of
                        hours.
                      </h4>
                      <form>
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={6}>
                            <CustomInput
                              labelText="Your Name"
                              id="name"
                              formControlProps={{
                                fullWidth: true
                              }}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <CustomInput
                              labelText="Your Email"
                              id="email"
                              formControlProps={{
                                fullWidth: true
                              }}
                            />
                          </GridItem>
                          <CustomInput
                            labelText="Your Message"
                            id="message"
                            formControlProps={{
                              fullWidth: true,
                              className: classes.textArea
                            }}
                            inputProps={{
                              multiline: true,
                              rows: 5
                            }}
                          />
                          <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
                            <Button color="primary">Send Message</Button>
                          </GridItem>
                        </GridContainer>
                      </form>
                    </GridItem>
                  </GridContainer>
                </div>
              </div>
        
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
