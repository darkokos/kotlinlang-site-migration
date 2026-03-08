import React from "react";

import "~/styles/layout.scss";
import "~/styles/grid.scss";

export function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`kto-layout-section ${className}`}>{children}</section>
  );
}

export function Container({ children }: { children: React.ReactNode }) {
  return <div className="kto-layout-container">{children}</div>;
}
