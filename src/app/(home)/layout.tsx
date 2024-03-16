import { Description } from "app/components/home/Description";
import { Hero } from "app/components/home/Hero";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <div>
        <Hero />
        <Description />

        {children}
      </div>
    </html>
  );
}
