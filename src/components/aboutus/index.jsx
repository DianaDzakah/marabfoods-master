import React from "react";
import styles from "./aboutus.module.css";
import image1 from "../../assets/annie-spratt-2INKkSrEmc8-unsplash.jpg";
const AboutUs = () => {
	return (
		<section>
			<article className={styles.article}>
				<div>
					<img className={styles.image1} src={image1} alt="img" />
				</div>
				<div className={styles.aboutUsInfo}>
					<h2 className={styles.aboutUsMainHeading}>About Us</h2>
					<p className={styles.aboutUsParagraph}>
						MarabFoods is more than just an agro-business; we're passionate
						stewards of the land, <br /> dedicated to bringing high-quality,
						sustainable agricultural products to your table. <br />
						From farm to fork, we prioritize ethical practices, <br />
						environmental responsibility and community well-being.
					</p>
					<h3 className={styles.whatWeDo}>what we do</h3>
					<p className={styles.aboutUsSpan}>
						We collaborate with local growers, ensuring fair prices and
						sustainable practices. <br /> We prioritize responsible land
						management and eco-friendly techniques. <br /> We provide access to
						nutritious, fresh produce for all.
					</p>
					<br />
					<div className={styles.aboutUsButton}>
						<button className={styles.button}>View Products</button>
					</div>
				</div>
			</article>
		</section>
	);
};

export default AboutUs;
