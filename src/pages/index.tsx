import Banner from "@/components/banner";
import Cta from "@/components/cta";
import Pillar_Islam from "@/components/pillar-islam";
import Schedule from "@/components/schedule";
import SeoMeta from "@/components/seo";
import Services from "@/components/services";

export default function Home() {
  return (
    <main>
      <SeoMeta title="Malta Islamic Center | Muslim Guide Malta" description="A Place of Worship and Guidance, Where You Embrace the Beauty of Islamic Teachings." url="https://muslimsguidemalta.com/" />
      <Banner />
      <Schedule />
      <Services />
      <Cta />
      <Pillar_Islam />
    </main>
  )
}
