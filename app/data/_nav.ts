export interface NavItem {
  url: string;
  title: string;
}

export interface SubNavItem {
  url: string;
  urlPattern?: string;
  title: string;
}

export interface SubNav {
  type: string;
  url: string;
  content: SubNavItem[];
}

export const mainNav: NavItem[] = [
  {
    url: "/docs/home.html",
    title: "Docs",
  },
  {
    url: "/community/",
    title: "Community",
  },
  {
    url: "/education/",
    title: "Teach",
  },
  {
    url: "https://play.kotlinlang.org",
    title: "Play",
  },
];

export const subNav: SubNav = {
  type: "tab",
  url: "/community/",
  content: [
    {
      url: "/community/",
      urlPattern: "^/community/$",
      title: "Overview",
    },
    {
      url: "/user-groups/user-group-list.html",
      urlPattern: "/user-groups.*",
      title: "User Groups",
    },
    {
      url: "/community/events.html",
      urlPattern: "^/community/(events\\.html|kotlin-nights.*)",
      title: "Events",
    },
    {
      url: "/community/talks.html",
      title: "Talks & Speakers",
    },
  ],
};
