export function ContentWrapper({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <section className="flex-grow p-6">{children}</section>;
}
