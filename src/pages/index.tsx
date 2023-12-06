import Banner from "@/components/banner";
import Cta from "@/components/cta";
import Pillar_Islam from "@/components/pillar-islam";
import Schedule from "@/components/schedule";
import SeoMeta from "@/components/seo";
import Services from "@/components/services";
import { useEffect, useState } from "react";

export default function Home() {


  const [prayerTimings, setPrayerTimings] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.aladhan.com/v1/timingsByCity?city=Valletta&country=Malta'
        );

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setPrayerTimings(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  return (
    <main>
      <SeoMeta title="Malta Islamic Center | Muslim Guide Malta" description="A Place of Worship and Guidance, Where You Embrace the Beauty of Islamic Teachings." url="https://muslimsguidemalta.com" />
      <Banner />
      <Schedule prayerTimings={prayerTimings} />
      <Services />
      <Cta />
      <Pillar_Islam />
    </main>
  )
}
