import { useEffect, useState } from "react";
import { Button } from "@rescui/button";
import { useTextStyles } from "@rescui/typography";
import { TabList, Tab, TabSeparator } from "@rescui/tab-list";
import cn from "classnames";

import { tabs } from "~/data/tabs";

import "highlight.js/styles/github.css";
import "~/styles/programming-language.scss";

export function ProgrammingLanguage() {
  const textCn = useTextStyles();

  const [activeIndex, setActiveIndex] = useState(0);
  const [highlighted, setHighlighted] = useState(() =>
    tabs[0].code
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;"),
  );

  useEffect(() => {
    setActiveIndex(Math.floor(Math.random() * tabs.length));
  }, []);

  useEffect(() => {
    async function highlight() {
      const { default: hljs } = await import("highlight.js/lib/core");
      const { default: kotlin } = await import(
        "highlight.js/lib/languages/kotlin"
      );

      if (!hljs.getLanguage("kotlin")) {
        hljs.registerLanguage("kotlin", kotlin);
      }

      const el = document.createElement("code");
      el.className = "language-kotlin";
      el.textContent = tabs[activeIndex].code;
      hljs.highlightBlock(el);
      setHighlighted(el.innerHTML);
    }

    highlight();
  }, [activeIndex]);

  return (
    <div className="kto-grid kto-grid-gap-32 kto-offset-top-96 kto-offset-top-md-48">
      <div className="kto-col-4 kto-col-md-12">
        <h3 className={textCn("rs-h2")}>
          Modern, concise and safe programming language
        </h3>
        <p className={cn(textCn("rs-text-2"), "kto-offset-top-32")}>
          Easy to pick up, so you can create powerful applications immediately.
        </p>
        <div className="kto-offset-top-32">
          <Button mode="outline" size="l" href="/docs/getting-started.html">
            Get started
          </Button>
        </div>
      </div>

      <div className="kto-col-8 kto-col-md-12">
        <TabList value={activeIndex} onChange={(v) => setActiveIndex(v)}>
          {tabs.map((tab, i) => (
            <Tab key={i}>{tab.title}</Tab>
          ))}
        </TabList>
        <TabSeparator />
        <pre className="programming-language__code kto-offset-top-16">
          <code
            className="hljs"
            dangerouslySetInnerHTML={{ __html: highlighted }}
          />
        </pre>
      </div>
    </div>
  );
}
