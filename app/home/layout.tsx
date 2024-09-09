import Nav from "../components/Nav";
import { ContentWrapper } from "../components/Wrappers";

export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section>
      <ContentWrapper><Nav />{children}</ContentWrapper>
    </section>
  );
}
