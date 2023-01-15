/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "/components/CustomDropdown/CustomDropdown.js";
import Button from "/components/CustomButtons/Button.js";

import styles from "/styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinksLeft(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Our Products"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link className={classes.dropdownLink} href={{ pathname: '/product', query: { model: 'ES51' } }}>
            51.2V 135Ah / Wall Mounted
            </Link>,
            <Link className={classes.dropdownLink} href={{ pathname: '/product', query: { model: 'ES10' } }}>
            51.2V 200Ah / Mobile
            </Link>,
            <Link className={classes.dropdownLink} href={{ pathname: '/product', query: { model: 'ESHYPR' } }}>
            10KWH-5KW / HYPRO1 SERIES
           </Link>,
            <Link className={classes.dropdownLink} href={{ pathname: '/product', query: { model: 'ESHpV' } }}>
              148KWh / POWER CABINET
            </Link>,
            <Link className={classes.dropdownLink} href={{ pathname: '/product', query: { model: 'MicroG' } }}>
            500kW/1500kWh / MICRO GRID SOLUTION
          </Link>,
          ]}
        />
      </ListItem>
    </List>
  );
}
