import Banner from "./components/Banner";
import CollegeSearchInput from "./components/CollegeSearchInput";
import Gallery from "./components/Gallery";
import ResearchPapers from "./components/ResearchPapers";
import Reviews from "./components/Reviews";
import TopColleges from "./components/TopColleges";



export default async function Home() {


  return (
    <>
      <Banner />
      <CollegeSearchInput/>
      <TopColleges />
      <ResearchPapers />
      <Gallery />
      <Reviews />

    </>
  );
}
