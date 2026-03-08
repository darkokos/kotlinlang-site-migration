export interface Card {
  id: number;
  title: string;
  subTitle: string;
  link: string;
  img: string;
}

export const cards: Card[] = [
  {
    id: 1,
    title: "Multiplatform Mobile",
    subTitle:
      "Share the logic of your Android and iOS apps while keeping UX native",
    link: "#",
    img: "/images/good-for/mobile.svg",
  },
  {
    id: 2,
    title: "Server-side",
    subTitle: "Modern development experience with familiar JVM technology",
    link: "#",
    img: "/images/good-for/server-side.svg",
  },
  {
    id: 3,
    title: "Web Frontend",
    subTitle: "Extend your projects to web",
    link: "#",
    img: "/images/good-for/web.svg",
  },
  {
    id: 4,
    title: "Android",
    subTitle: "Recommended by Google for building Android apps",
    link: "#",
    img: "/images/good-for/android.svg",
  },
];
