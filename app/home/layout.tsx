import { ScreenWrapper } from "../components/Wrappers";

export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section>
      <ScreenWrapper>{children}</ScreenWrapper>
    </section>
  );
}
