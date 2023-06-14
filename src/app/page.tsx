import User from "./components/home/User";
import Identity from "./components/home/Identity";
import Contact from "./components/home/Contact";
import Skills from "./components/home/Skills";

interface HomeProps {
  children: JSX.Element[] | JSX.Element;
}

export default function Home(prop: HomeProps): JSX.Element {
  return (
    <main>
      {/* @ts-expect-error Server Component */}
      <User />

      {/* @ts-expect-error Server Component */}
      <Skills />

      {/* @ts-expect-error Server Component */}
      <Identity />

      {/* @ts-expect-error Server Component */}
      <Contact />
    </main>
  );
}
