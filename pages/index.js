import SwiperCarousel from "@/components/indexComp/SwiperCarousel";
import HomeSec2 from "@/components/indexComp/HomeSec2";
import Layout from "@/layouts/Layout";
import HomeSec3 from "@/components/indexComp/HomeSec3";

export default function Home() {
  return (
    <Layout>
      <section className="section-carousel">
        <SwiperCarousel />
      </section>

      <HomeSec3 />
      <HomeSec2 />

      
    </Layout>
  );
}
