import NewReleases from "./components/newReleases/index";
import TopSellers from "./components/topSeallers";
import Reports from "./components/reports";
import EventsSection from "./components/event";

function Home() {
  return (
    <div>
      <NewReleases />
      <TopSellers />
      <Reports />
      <EventsSection />
    </div>
  );
}

export default Home;
