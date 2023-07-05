import React from "react";

import styles from './HomeSec2.module.css'

const HomeSec2 = () => {
  return (

    <section className='container-lg py-5'>
  <div className={`row p5`}>

    <article className={` col-md-6 order-last order-md-first  ${styles['extra-product__content']}`}>
      <h2>We Have This Builders Easy integrative.</h2>

      <p className='py-2 t text-muted'>
        Beyond more stoic this along goodness this sed wow manatee mongos
        flusterd impressive man farcrud opened inside owin punitively
        wasteful telling spransac coldly spokeles.
      </p>

      <ul>
        <li>
          <span>Beyond drone is an to be contre unmanned aerial.</span>
        </li>
        <li>
          <span>With various equipment including tho drone.</span>
        </li>
      </ul>

      <h4>
        Beyond more stoic this along goodness this sed wow flusterd
        impressive
      </h4>

      <div className={styles['extra-product__founder']}>
        <img src="https://risingtheme.com/html/rokon-demo/rokon/assets/img/other/about-author.webp" className={styles.imgFluid} alt="" />

        <h4>
          <span className={`color-red fw-bold d-block mb-2`}>- Rubel Wilson</span>
          <span className={styles.dBlock}>Founder</span>
        </h4>

        <img src="https://risingtheme.com/html/rokon-demo/rokon/assets/img/icon/signature.webp" className='img-fluid' alt="" />
      </div>

      <div>
        <a href="#" className={`btnj btn-dark-red`}>
          Ask For Price
        </a>
      </div>
    </article>

    <article className={` col-md-6 order-first order-md-last ${styles['extra-product__background']}`}>
      <img
        src="https://risingtheme.com/html/rokon-demo/rokon/assets/img/other/about-thumb5.webp"
        className='img-fluid'
        alt="Image"
      />
    </article>

  </div>
</section>



  );
};

export default HomeSec2;
