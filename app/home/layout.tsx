import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { ScreenWrapper } from "../components/Wrappers";

export default function HomeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <section>
      <Nav />
      <Banner />
      <ScreenWrapper>{children}</ScreenWrapper>
      <Footer />
    </section>
  );
}
