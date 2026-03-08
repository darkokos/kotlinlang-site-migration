export interface Testimonial {
  company: string;
  logo: string;
  url: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    company: "Gradle",
    logo: "/images/companies/gradle.svg",
    url: "https://blog.gradle.org/kotlin-meets-gradle",
    text: "Gradle is introducing Kotlin as a language for writing build scripts",
  },
  {
    company: "Corda",
    logo: "/images/companies/corda.svg",
    url: "https://www.corda.net/2017/01/10/kotlin/",
    text: "Corda is an open-source distributed ledger platform, supported by major banks, and built entirely in Kotlin",
  },
  {
    company: "Evernote",
    logo: "/images/companies/evernote.svg",
    url: "https://blog.evernote.com/tech/2017/01/26/android-state-library/",
    text: "Evernote recently integrated Kotlin into their Android client",
  },
  {
    company: "Coursera",
    logo: "/images/companies/coursera.svg",
    url: "https://building.coursera.org/blog/2016/03/16/becoming-bilingual-coursera/",
    text: "Coursera Android app is partially written in Kotlin",
  },
  {
    company: "Spring",
    logo: "/images/companies/spring.svg",
    url: "https://spring.io/blog/2017/01/04/introducing-kotlin-support-in-spring-framework-5-0",
    text: "Spring makes use of Kotlin's language features to offer more concise APIs",
  },
  {
    company: "Atlassian",
    logo: "/images/companies/atlassian.svg",
    url: "https://twitter.com/danlew42/status/809065097339564032",
    text: "All new code in the Trello Android app is in Kotlin",
  },
];
