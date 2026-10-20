import { Fragment } from "react";
import { tickerItems } from "../data/portfolioData";

export default function Marquee() {
  return (
    <section className="marquee" aria-label="Core focus areas">
      {tickerItems.map((item, index) => (
        <Fragment key={item}>
          <span>{item}</span>
          {index < tickerItems.length - 1 && <i aria-hidden="true" />}
        </Fragment>
      ))}
    </section>
  );
}
