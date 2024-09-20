import Banner from "../components/Banner";
import Footer from "../components/Footer";
import ParticlesComponent from "../components/Particles";
import { ContentWrapper } from "../components/Wrappers";

export default function HomeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <section>
      <Banner />
      <ParticlesComponent />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </section>
  );
}
