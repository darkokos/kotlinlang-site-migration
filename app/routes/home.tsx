import {
  useLoaderData,
  type LinksFunction,
  type MetaFunction,
} from "react-router";
import { ThemeProvider } from "@rescui/ui-contexts";

export const meta: MetaFunction<typeof loader> = ({ data, location }) => {
  const title = data?.title ?? "Kotlin Programming Language";
  const description = data?.description ?? "";
  const ogImage =
    data?.ogImage ??
    "https://kotlinlang.org/assets/images/open-graph/general.png";
  const twitterImage =
    data?.twitterImage ??
    "https://kotlinlang.org/assets/images/twitter/general.png";
  const url = `https://kotlinlang.org${location.pathname}`;

  return [
    { title: title },
    { property: "og:title", content: title },
    { property: "og:url", content: url },
    { property: "og:image", content: ogImage },
    { property: "og:description", content: description },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image:src", content: twitterImage },
  ];
};

export const handle = {
  restyled: "v2",
  bodyClass: "page__index-new",
  headerDropdownTheme: "dark",
};

export const links: LinksFunction = () => [
  {
    rel: "preload",
    href: "/assets/fonts/JetBrainsMono/JetBrainsMono-Regular.woff2",
    as: "font",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    href: "/assets/fonts/JetBrainsMono/JetBrainsMono-Bold.woff2",
    as: "font",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    href: "/assets/fonts/JetBrainsMono/JetBrainsMono-Italic.woff2",
    as: "font",
    crossOrigin: "anonymous",
  },
];

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
  return {
    title: "Kotlin Programming Language",
    description: "",
    ogImage: null,
    twitterImage: null,
    testimonials,
    news,
    cards,
  };
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
