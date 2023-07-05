import React from "react";

import styles from "./HomeSec3.module.css";

const HomeSec3 = () => {
  return (
    <section class="container-lg">
      <div class="row p-5">

        <article class={`col-md-6`}>
          <img
            src="https://risingtheme.com/html/rokon-demo/rokon/assets/img/other/about-thumb4.webp"
            class="img-fluid"
            alt="Image"
          />
        </article>

        <article class={`col-md-6 ${styles["features__content"]}`}>
          <h2>Most Talented Builders Architects Drone.</h2>
          <p class="py-2 text-muted">
            Beyond more stoic this along goodness this sed wow manatee mongos
            flusterd impressive man farcrud opened inside owin punitively
            wasteful telling spransac coldly spokeles.
          </p>

          <div class={`${styles["features__progress"]}`}>
            <div class={`${styles["features__progress-content"]}`}>
              <div>
                <p>Integrative control:</p>
              </div>

              <div>
                <p>58%</p>
              </div>
            </div>

 
            <div
              class="progress h-6 mb-4 bg"
              aria-valuenow="58"
              aria-valuemax="100"
            >

              <div class="progress-bar bg-danger w-58 h-6 " ></div>

            </div>

            <div class={`${styles["features__progress-content"]}`}>
              <div>
                <p>Design Device:</p>
              </div>

              <div>
                <p>77%</p>
              </div>
            </div>

            <div class="progress h-6" aria-valuenow="77" aria-valuemax="100">
              <div class="progress-bar bg-danger w-77 h-6"></div>
            </div>

          </div>

          <h2 className="pt-5 text-center ">This are our Features</h2>

          <btn className='btn btn-outline-danger mt-3  fs-1'>But it Now</btn>
        </article>
      </div>
    </section>
  );
};

export default HomeSec3;
