export interface Paragraph {
  paragraph: string;
  subparagraphsList: Subparagraph[];
}

export interface Subparagraph {
  subparagraph: string;
  text: string;
  images?: Images[];
}

export interface Images {
  url?: string;
  description?: string;
}