import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import {
  ServerRouter,
  type AppLoadContext,
  type EntryContext,
} from "react-router";
import { PassThrough } from "node:stream";
import type { ReadableStream } from "node:stream/web";

const ResizeObserverPolyfill = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

if (typeof window === "undefined") {
  (globalThis as any).window = {
    addEventListener: () => {},
    removeEventListener: () => {},
    document: (globalThis as any).document,
    ResizeObserver: ResizeObserverPolyfill,
  };
}

if (typeof ResizeObserver === "undefined") {
  (globalThis as any).ResizeObserver = ResizeObserverPolyfill;
}

const ABORT_DELAY = 5000;

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  routerContext: EntryContext,
  _loadContext: AppLoadContext,
) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const userAgent = request.headers.get("user-agent");
    const readyOption =
      userAgent && isbot(userAgent) ? "onAllReady" : "onShellReady";

    const { pipe, abort } = renderToPipeableStream(
      <ServerRouter context={routerContext} url={request.url} />,
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = body as unknown as ReadableStream;

          responseHeaders.set("Content-Type", "text/html");

          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode,
            }),
          );

          pipe(body);
        },
        onShellError(error: unknown) {
          reject(error);
        },
        onError(error: unknown) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        },
      },
    );

    setTimeout(abort, ABORT_DELAY);
  });
}
