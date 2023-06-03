import User from "./components/home/User";
import Identity from "./components/home/Identity";
import Contact from "./components/home/Contact";
import Education from "./education/page";

export default function Home() {
  return (
    <main>
      {/* @ts-expect-error Server Component */}
      <User />

      {/* @ts-expect-error Server Component */}
      <Identity />

      {/* @ts-expect-error Server Component */}
      <Contact />

      <Education />
    </main>
  );
}
