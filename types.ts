export interface Award {
  id: string;
  year: string;
  title: string;
  organization: string;
  description?: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  title: string;
  organization?: string;
  year?: string;
}

export interface SpeakingTopic {
  id: string;
  title: string;
  description: string;
  category: 'Diversity' | 'Health & Advocacy' | 'Resilience';
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
}
