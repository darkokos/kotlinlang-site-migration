import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useMatches,
} from "react-router";

import stylesV2Href from "~/styles/styles-v2.scss?url";

export function Layout({ children }: { children: React.ReactNode }) {
  const matches = useMatches();
  const restyled = matches.some((m) => (m.handle as any)?.restyled);
  const stylesHref = restyled ? stylesV2Href : null;

  return (
    <html lang="en" className={restyled ? "page_restyled_v2" : ""}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {stylesHref && <link rel="stylesheet" href={stylesHref} />}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
