import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { Spacer } from "@nextui-org/react";
import HomeHero from "./components/molecules/HomeHero/HomeHero";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);

  return (
    <div className="w-full  max-w-screen-2xl">
      <HomeHero />
      <Spacer y={20} />
      <HomeHero />
    </div>
  );
} //Closes Home Page
