export interface Award {
  year: string;
  title: string;
  organization: string;
  description?: string;
}

export interface Testimonial {
  text: string;
  author: string;
  title: string;
  organization?: string;
}

export interface SpeakingTopic {
  title: string;
  description: string;
  category: 'Diversity' | 'Health & Advocacy' | 'Resilience';
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}