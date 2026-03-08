import { useLoaderData } from "react-router";
import { ThemeProvider } from "@rescui/ui-contexts";

export const handle = { restyled: "v2" };

import { testimonials } from "~/data/testimonials";
import { news } from "~/data/last-news";
import { cards } from "~/data/cards";

import { HeaderSection } from "~/components/header-section";
import { LatestFromKotlinSection } from "~/components/latest-from-kotlin-section";
import { WhyKotlinSection } from "~/components/why-kotlin-section";
import { UsageSection } from "~/components/usage-section";
import { StartSection } from "~/components/start-section";

import "~/styles/home.scss";

export async function loader() {
  return { testimonials, news, cards };
}

export default function Home() {
  const { testimonials, news, cards } = useLoaderData<typeof loader>();

  return (
    <ThemeProvider theme="dark">
      <div className="overview-page">
        <HeaderSection cardsData={cards} />
        <LatestFromKotlinSection newsData={news} />
        <WhyKotlinSection />
        <UsageSection testimonials={testimonials} />
        <StartSection />
      </div>
    </ThemeProvider>
  );
}
