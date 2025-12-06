export enum CharacterColor {
  Pink = 'pink',
  Yellow = 'yellow',
  Blue = 'blue',
  Red = 'red'
}

export interface Character {
  id: string;
  name: string;
  kanji: string;
  role: string;
  instrument: string;
  description: string;
  color: CharacterColor;
  themeColorHex: string;
  imageUrl: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
  size: 'small' | 'medium' | 'large';
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  icon: 'star' | 'music' | 'camera';
}