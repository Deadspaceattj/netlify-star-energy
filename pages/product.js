import React from "react"

import { useRouter } from 'next/router'
// nodejs library that concatenates classes
import classNames from "classnames"
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles"
import Dashboard from "@material-ui/icons/Dashboard"
import Schedule from "@material-ui/icons/Schedule"
import List from "@material-ui/icons/List"

import NavPills from "/components/NavPills/NavPills.js"
// core components
import Header from "/components/Header/Header.js"
import Footer from "/components/Footer/Footer.js"
import HeaderLinksLeft from "/components/Header/HeaderLinksLeft.js";
import HeaderLinksRight from "/components/Header/HeaderLinksRight.js";
import Parallax from "/components/Parallax/Parallax.js"
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import styles from "/styles/jss/nextjs-material-kit/pages/productPage.js"
import _pillStyles from "/styles/jss/nextjs-material-kit/pages/componentsSections/pillsStyle.js";

const productDetails =
	[
		{
			ModelKey: "ES51",
			ModelName: "ES-51.2V 135Ah-Wall Mounted",
			ModelDesc: "135Ah-Wall Mounted LITHIUM-ION BATTERY",
			Image: "/img/products/ES51.png",
			ImageH: "height:445px;",
			ImageW: "height:433px;",
			ImageTop: "translate3d(-50%, 0)"
		},
		{
			ModelKey: "ES10",
			ModelName: "ES-51.2V200Ah-16S",
			ModelDesc: "Mobile LITHIUM-ION BATTERY",
			Image: "/img/products/ES10.png",
			ImageH: "height:294px;",
			ImageW: "height:180px;",
			ImageTop: "translate3d(0,-40%, 0)"
		},
		{
			ModelKey: "ESHYPR",
			ModelName: "HyPro1",
			ModelDesc: "HyPro1-10KWH-5KW",
			Image: "/img/products/ESHYPR.png",
			ImageH: "height:445px;",
			ImageW: "height:433px;",
			ImageTop: "translate3d(0,-25%, 0)"
		},
		{
			ModelKey: "ESHpV",
			ModelName: "HIGH VOLTAGE POWER CABINET",
			ModelDesc: "148KWh Outdoor Cabinet",
			Image: "/img/products/ESHpV.png",
			ImageH: "height:445px;",
			ImageW: "height:433px;",
			ImageTop: "translate3d(0, -30%, 0)"
		},
		{
			ModelKey: "MicroG",
			ModelName: "MICRO GRID SOLUTION",
			ModelDesc: "40ft container system, 500kW/1500kWh",
			Image: "/img/products/MicroG.png",
			ImageH: "height:337px;",
			ImageW: "height:531px;",
			ImageTop: "translate3d(0, -30%, 0)"
		}
]
const dashboardRoutes = [];
const useStyles = makeStyles(styles)

export default function ProductPage(props) {
	const classes = useStyles()
	const imageClasses = classNames(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid, classes.imgLogo, classes.imgProduct)
	const { ...rest } = props
	const router = useRouter()
	const prod = productDetails.find(x=>x.ModelKey == router.query.model);
	return (
		<div>
			<Header
        		color="transparent"
				routes={dashboardRoutes}
				rightLinks={<HeaderLinksRight />}
				leftLinks={<HeaderLinksLeft />}
				fixed
				changeColorOnScroll={{
				height: 150,
				color: "white"
				}}
				{...rest}
			/>
			<Parallax small filter responsive image="/img/product-bg.jpg" />
			<div className={classes.productDetails}>
				<div className={classNames(classes.main, classes.mainRaised)}>
					<div className={classes.product}>
						{prod && (
							
							<img src={prod.Image} height={prod.ImageH} width={prod.ImageW} style={{transform: prod.ImageTop}} alt="..." className={imageClasses.imgProduct} />
							
						)}
						
						{prod && (
							<GridContainer justify="flex-center">
								<GridItem>
									<div className={classes.name}>
										<h3 className={classes.title}>{prod.ModelName}</h3>
										<h4>{prod.ModelDesc}</h4>
									</div>
								</GridItem>
								<GridItem>
									<div className={classes.description}>
										<div id="navigation-pills">
											<GridContainer justify="start">
												<GridItem xs={12} sm={12} md={12} lg={12}>
													<NavPills
														color="primary"
														tabs={[
															{
																tabButton: "Dashboard",
																tabIcon: Dashboard,
																tabContent: (
																	<span>
																		<p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.</p>
																		<br />
																		<p>Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.</p>
																		<br />
																		<p>Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.</p>
																	</span>
																),
															},
															{
																tabButton: "Schedule",
																tabIcon: Schedule,
																tabContent: (
																	<span>
																		<p>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.</p>
																		<br />
																		<p>Dramatically maintain clicks-and-mortar solutions without functional solutions. Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.</p>
																	</span>
																),
															},
															{
																tabButton: "Tasks",
																tabIcon: List,
																tabContent: (
																	<span>
																		<p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.</p>
																		<br />
																		<p>Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.</p>
																		<br />
																		<p>Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.</p>
																	</span>
																),
															},
														]}
													/>
												</GridItem>
											</GridContainer>
										</div>
									</div>
								</GridItem>
							</GridContainer>
						)}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)

}
