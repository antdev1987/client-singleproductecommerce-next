import Footer from "@/components/Footer";
import NavbarComp from "@/components/NavbarComp";
import Head from "next/head";
import React from "react";



const Layout = ({title, children}) => {
  return (
    <>
      <Head>
        <title>{title ? title + "- Ant-Ecommerce" : "Ant-Ecommerce"}</title>
        <meta name="description" content="Ecommerce Shop Next" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="d-flex flex-column vh-100">
        
        <header>
          <NavbarComp />
        </header>

        <main className="shadow-lg mt-3 flex-fill border px-2 px-lg-0">
          {children}
        </main>

        <footer className="py-3">
          <Footer />
        </footer>

      </div>
    </>
  );
};

export default Layout;
