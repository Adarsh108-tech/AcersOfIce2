import Navbar from "@/components/Home/navbar";
import HeroSection from "@/components/Home/heroSection";
import AboutCompany from "@/components/Home/aboutCompanyLandingpage";
import ImpactStats from "@/components/Home/impactStats";
import VolunteerWithUs from "@/components/Home/VolunteerWithUs";
import Footer from "@/components/Home/footer";
import Clouds from "@/components/Home/cloud-seprater";
import LatestInsights from "@/components/Home/news&videos";
export default function Home() {
  return (
    <main className="flex overflow-x-hidden min-h-screen flex-col items-center justify-between bg-white w-100vw">
      <Navbar/>
      <HeroSection  />
      <AboutCompany id="why-it-matters"/>
      <Clouds/>
      <ImpactStats id = "our-impacts"/>
      <LatestInsights/>
      <VolunteerWithUs id="volunteer" />
      <Footer/>
    </main>
  );
}
