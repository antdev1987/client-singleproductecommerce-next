import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={`container-lg`}>
        <div className={`row pb-0 pb-md-5`}>
          <div className="col-md-4">
            <div className={styles["footer__content"]}>
              <img src="img/logo-white.webp" alt="Logo" />
              <p className={`pt-5 pb-3 pe-0 pe-md-5`}>
                Nemo enim ipsam voluptate quia voluptas sit aspernatur aut odit
                aut fugit, sed quia magni this dolores eos qui ratione.
              </p>

              <div className={styles["footer__content-tel-mail"]}>
                <i className="bx bxs-phone"></i>
                <a href="#">+1 123 456 789 10</a>
              </div>

              <div className={styles["footer__content-tel-mail"]}>
                <i className="bx bxs-envelope"></i>
                <a href="#">company@example.com</a>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <h3 className="pb-4">Recent Post</h3>
            <ul className={styles["footer__list"]}>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Wishlist</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Frequently</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h3 className="pb-4">Account Info</h3>
            <ul className={styles["footer__list"]}>
              <li>
                <a href="#">My Account</a>
              </li>
              <li>
                <a href="#">Shopping Cart</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Register</a>
              </li>
              <li>
                <a href="#">Checkout</a>
              </li>
            </ul>
          </div>

          <div className="col-md-2">
            <h3 className="pb-4">Social Share</h3>
            <ul className={`${styles["footer__list"]} ` }>
              <li className="">
                <a href="#">
                  <i className="bx bxl-instagram"></i>Instagram
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bx bxl-facebook"></i>Facebook
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bx bxl-youtube"></i>Youtube
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bx bxl-linkedin"></i>Linkedin
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bx bxl-twitter"></i>Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={`d-flex border-top border-light mt-5 pt-5`}>
          <div className={`flex-grow-1`}>
            <p>Copyright &copy; 2022 Rokon, All Rights Reserved.</p>
          </div>

          <div className={styles["footer__conditions-policy"]}>
            <a href="#">Term & Conditions</a>
            <p href="#" className={`d-inline mx-4`}>
              |
            </p>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </section>

    // <section class="footer">
    //     <div class="container-lg">
    //         <div class="row pb-0 pb-md-5">
    //             <div class="col-md-4">
    //                 <div class="footer__content">
    //                     <img src="img/logo-white.webp" alt="" />
    //                     <p class="pt-5 pb-3 pe-0 pe-md-5">Nemo enim ipsam voluptate quia voluptas sit aspernatur aut odit aut fugit,
    //                         sed quia magni this
    //                         dolores eos qui ratione.</p>

    //                     <div class="footer__content-tel-mail">
    //                         <i class='bx bxs-phone'></i><a href="#">+1 123 456 789 10</a>
    //                     </div>

    //                     <div class="footer__content-tel-mail">
    //                         <i class='bx bxs-envelope'></i><a href="#">company@example.com</a>
    //                     </div>
    //                 </div>
    //             </div>

    //             <div class="col-md-3">
    //                 <h3 class="pb-4">Recent Post</h3>
    //                 <ul class="footer__list">
    //                     <li><a href="#">About Us</a></li>
    //                     <li><a href="#">Wishlist</a></li>
    //                     <li><a href="#">Contact Us</a></li>
    //                     <li><a href="#">Privacy Policy</a></li>
    //                     <li><a href="#">Frequently</a></li>
    //                 </ul>
    //             </div>

    //             <div class="col-md-3">
    //                 <h3 class="pb-4">Account Info</h3>
    //                 <ul class="footer__list">
    //                     <li><a href="#">My Account</a></li>
    //                     <li><a href="#">Shopping Cart</a></li>
    //                     <li><a href="#">Login</a></li>
    //                     <li><a href="#">Register</a></li>
    //                     <li><a href="#">Checkout</a></li>
    //                 </ul>
    //             </div>

    //             <div class="col-md-2">
    //                 <h3 class="pb-4">Social Share</h3>
    //                 <ul class="footer__list">
    //                     <li><a href="#"><i class='bx bxl-instagram'></i>Instagram</a></li>
    //                     <li><a href="#"><i class='bx bxl-facebook'></i>Facebook</a></li>
    //                     <li><a href="#"><i class='bx bxl-youtube'></i>Youtube</a></li>
    //                     <li><a href="#"><i class='bx bxl-linkedin'></i>Linkedin</a></li>
    //                     <li><a href="#"><i class='bx bxl-twitter'></i>Twitter</a></li>
    //                 </ul>
    //             </div>
    //         </div>

    //         <div class="d-flex border-top border-light mt-5 pt-5">
    //             <div class="flex-grow-1">
    //                 <p>Copyright &copy; 2022 Rokon, All Rights Reserved.</p>
    //             </div>

    //             <div class="footer__conditions-policy">
    //                 <a href="#">Term & Conditions</a>
    //                 <p href="#" class="d-inline mx-4">|</p>
    //                 <a href="#">Privacy Policy</a>
    //             </div>
    //         </div>
    //     </div>
    // </section>
  );
};

export default Footer;
