import CafeList from "../components/CafeList/CafeList";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Nav/Nav";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <CafeList />
    </div>
  );
}
