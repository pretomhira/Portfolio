import Identity from "./components/home/Identity";
import Education from "./education/page";

export default function Home() {
  return (
    <main>
      {/* @ts-expect-error Server Component */}
      <Identity />
      <Education />
    </main>
  );
}
