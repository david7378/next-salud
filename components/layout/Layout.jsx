import Head from "next/head";
import Header from "../header/Header";

export const Layout = ({ children, title, description }) => {
  return (
    <>
      <nav>
        <Header />
      </nav>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
      </Head>
      <main>{children}</main>

      <footer></footer>
    </>
  );
};

export default Layout;

Layout.defaultProps = {
  title: "Mejor con salud",
  description: "Vivir bien, tips de bienestar general, recetas saludables, ejercicios, fit"
};
