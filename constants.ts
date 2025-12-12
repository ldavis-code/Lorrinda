import { Award, SpeakingTopic, Testimonial, TimelineEvent } from './types';

export const AWARDS: Award[] = [
  {
    id: 'award-optn-2025',
    year: "2025",
    title: "Appointed to OPTN Transitional Nominating Committee",
    organization: "Health Resources & Services Administration (HRSA)",
    description: "Selected to reform governance of the Organ Procurement and Transplantation Network."
  },
  {
    id: 'award-commendation-2025',
    year: "2025",
    title: "Letter of Commendation",
    organization: "HRSA",
    description: "Recognized for outstanding service."
  },
  {
    id: 'award-gli-2023',
    year: "2023",
    title: "Global Excellence in Advocacy Award",
    organization: "Global Liver Institute"
  },
  {
    id: 'award-triangle-2021',
    year: "2021",
    title: "TRIANGLE Award",
    organization: "TRIO-Oklahoma"
  },
  {
    id: 'award-hof-nominee-2020',
    year: "2020",
    title: "Women's Hall of Fame Nominee",
    organization: "Oklahoma Commission on the Status of Women"
  },
  {
    id: 'award-advocate-2010',
    year: "2010",
    title: "Distinguished Advocate Award",
    organization: "MBDA Minority Business Development Agency - Southwest United States"
  },
  {
    id: 'award-hof-2010',
    year: "2010",
    title: "Hall of Fame Inductee",
    organization: "Women's Chamber of Commerce Nevada"
  },
  {
    id: 'award-top25-2010',
    year: "2010",
    title: "Top 25 Women Impacting Diversity",
    organization: "MBN News Magazine"
  },
  {
    id: 'award-top25-diversity-2009',
    year: "2009",
    title: "Top 25 Diversity Programs in the U.S.",
    organization: "MBN News Magazine"
  },
  {
    id: 'award-top25-2009',
    year: "2009",
    title: "Top 25 Women Impacting Diversity",
    organization: "MBN News Magazine"
  },
];

export const SPEAKING_TOPICS: SpeakingTopic[] = [
  {
    id: 'topic-connection',
    title: "The Power of Connection",
    category: "Resilience",
    description: "Drawing from her journey as a liver cancer survivor and transplant recipient, Lorrinda shares how human connection is a vital medicine for survival and success."
  },
  {
    id: 'topic-inclusion',
    title: "Building Inclusion in High-Stakes Industries",
    category: "Diversity",
    description: "Lessons from overseeing diversity on a $9 Billion construction project (MGM CityCenter). How to move beyond compliance to genuine culture change."
  },
  {
    id: 'topic-patient-advocate',
    title: "From Patient to Advocate",
    category: "Health & Advocacy",
    description: "Navigating the complex healthcare system, the importance of organ donation, and how patients can reclaim their voice in policy making."
  },
  {
    id: 'topic-adversity',
    title: "Turning Adversity into Advocacy",
    category: "Resilience",
    description: "How a shock diagnosis changed a career trajectory from corporate executive to national health advocate, and the leadership lessons learned along the way."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-okhof',
    text: "Ms. Gray-Davis has shown her dedication to Women in the workforce... When the 'why' is measured there is no doubt.",
    author: "Nomination Committee",
    title: "Oklahoma Women's Hall of Fame",
    year: "2020"
  },
  {
    id: 'testimonial-mgm',
    text: "Your efforts make our community a better place – it's super to see you receive a little well-deserved attention for all the selfless giving you do.",
    author: "Punam Mathur",
    title: "Sr. Vice President Corporate Diversity",
    organization: "MGM MIRAGE"
  },
  {
    id: 'testimonial-usbc',
    text: "She's been pivotal in the awarding over a billion dollars to minority, minority women and women owned companies.",
    author: "Ron Busby",
    title: "President & CEO",
    organization: "U.S. Black Chambers, Inc."
  }
];

export const TIMELINE: TimelineEvent[] = [
  {
    id: 'timeline-perini',
    year: "2005-2011",
    title: "Director of Diversity Development",
    description: "Led diversity initiatives for Perini Building Company, including the $9B MGM CityCenter project."
  },
  {
    id: 'timeline-diagnosis',
    year: "2017",
    title: "The Turning Point",
    description: "Diagnosed with liver cancer and received a life-saving transplant at Nazih-Zuhdi Transplant Institute."
  },
  {
    id: 'timeline-trio',
    year: "2020",
    title: "Founder, TRIO Oklahoma",
    description: "Established the Oklahoma chapter of Transplant Recipients International Organization to support patients."
  },
  {
    id: 'timeline-honor-gift',
    year: "2023",
    title: "Co-lead, Honor the Gift Coalition",
    description: "Leading efforts to increase organ donation awareness and advocacy."
  },
  {
    id: 'timeline-optn',
    year: "2025",
    title: "National Leadership",
    description: "Appointed to the OPTN Transitional Nominating Committee under HRSA to reform national transplant governance. Vice-Chair of the Patient Affairs Committee OPTN."
  }
];
