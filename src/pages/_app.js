import '@/styles/globals.css';
import Layout from '../application/component/layout';

export default function App({ Component, pageProps }) {
  // const sticky = 50;

  // useEffect(() => {
  //   const topNav = document.getElementById('subHeader');

  //   const handleScroll = () => {

  //     if (window.pageYOffset >= sticky) {
  //       topNav.classList.add("sticky");
  //       topNav.classList.add("top-0");
  //       // topNav.classList.add("left-0");
  //       // topNav.classList.add("right-0");
  //       topNav.classList.remove("border");
  //       topNav.classList.remove("border-b");
  //       topNav.classList.add("shadow-lg");
  //     } else {
  //       topNav.classList.remove("sticky");
  //       topNav.classList.remove("top-0");
  //       // topNav.classList.remove("left-0");
  //       // topNav.classList.remove("right-0");
  //       topNav.classList.add("border");
  //       topNav.classList.add("border-b");
  //       topNav.classList.remove("shadow-lg");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);


  return (
    <Layout window={5}>
      <Component {...pageProps} />
    </Layout>
  );
}
