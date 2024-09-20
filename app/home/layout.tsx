import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ParticleBackground from "../components/ParticleBackground";
import { ContentWrapper } from "../components/Wrappers";

export default function HomeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <Banner />
      <ParticleBackground />
      <Navbar />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </main>
  );
}
