import { Links, Meta, Outlet, Scripts, useMatches } from "react-router";
import { ThemeProvider } from "@rescui/ui-contexts";
import GlobalHeader from "@jetbrains/kotlin-web-site-ui/out/components/header/index.js";
import GlobalFooter from "@jetbrains/kotlin-web-site-ui/out/components/footer/index.js";
import "@jetbrains/kotlin-web-site-ui/out/components/header/index.css";
import "@jetbrains/kotlin-web-site-ui/out/components/footer/index.css";

import { releases } from "~/data/releases";
import stylesV2Href from "~/styles/styles-v2.scss?url";

export function ErrorBoundary() {
  return (
    <html lang="en">
      <head>
        <title>404 Not Found</title>
      </head>
      <body>
        <h1>404 Not Found</h1>
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const matches = useMatches();

  const restyledValue = matches
    .map((m) => (m.handle as any)?.restyled)
    .filter(Boolean)
    .pop();
  const bodyClass = matches
    .map((m) => (m.handle as any)?.bodyClass)
    .filter(Boolean)
    .join(" ");
  const dropdownTheme =
    matches
      .map((m) => (m.handle as any)?.headerDropdownTheme)
      .filter(Boolean)
      .pop() ?? "light";

  const htmlClass = [
    bodyClass,
    restyledValue ? `page_restyled_${restyledValue}` : "",
  ]
    .filter(Boolean)
    .join(" ");
  const stylesHref = restyledValue ? stylesV2Href : null;

  return (
    <html lang="en" className={htmlClass}>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content={
            restyledValue === "v2"
              ? "width=device-width, initial-scale=1"
              : "width=1000, initial-scale=1"
          }
        />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5P98');`,
          }}
        />
        {/* End Google Tag Manager */}

        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//resources.jetbrains.com" />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />

        <link
          rel="icon"
          type="image/svg+xml"
          href="/assets/images/favicon.svg"
        />
        <link rel="alternate icon" href="/assets/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          href="/assets/images/apple-touch-icon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/assets/images/apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/assets/images/apple-touch-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/assets/images/apple-touch-icon-144x144.png"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Kotlin" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@kotlin" />

        {stylesHref && <link rel="stylesheet" href={stylesHref} />}

        <Meta />
        <Links />
      </head>
      <body className="page_js_no" suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.body.className = document.body.className.replace('page_js_no', 'page_js_yes')`,
          }}
        />

        <div className="global-layout" suppressHydrationWarning>
          <GlobalHeader
            productWebUrl={releases.latest.url}
            hasSearch={false}
            searchConfig={{}}
            dropdownTheme={dropdownTheme}
          />
          <Outlet />
          <ThemeProvider theme="dark">
            <GlobalFooter />
          </ThemeProvider>
        </div>

        <Scripts />
      </body>
    </html>
  );
}
