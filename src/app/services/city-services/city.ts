export type Visible = 'visible' | 'invisible';

export interface City {
  coordinates: string, 
  tag: string[],
  title: string 
}

export type CityAdapter = City & { displayedClass: string };