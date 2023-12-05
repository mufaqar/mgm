import Banner from "@/components/banner";
import Cta from "@/components/cta";
import Pillar_Islam from "@/components/pillar-islam";
import Schedule from "@/components/schedule";
import Services from "@/components/services";

export default function Home() {
  return (
    <main>
      <Banner />
      <Schedule />
      <Services />
      <Cta />
      <Pillar_Islam />
    </main>
  )
}
