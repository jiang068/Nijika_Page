import { Character, CharacterColor, GalleryItem, TimelineEvent } from './types';

export const CHARACTERS: Character[] = [
  {
    id: 'bocchi',
    name: 'Hitori Gotoh',
    kanji: '後藤 ひとり',
    role: 'Lead Guitar / Lyrics',
    instrument: 'Gibson Les Paul Custom',
    description: 'A severely socially anxious girl who picked up the guitar to make friends. Known online as "guitarhero".',
    color: CharacterColor.Pink,
    themeColorHex: '#ec4899', // pink-500
    imageUrl: 'https://picsum.photos/seed/bocchi/600/900',
  },
  {
    id: 'nijika',
    name: 'Nijika Ijichi',
    kanji: '伊地知 虹夏',
    role: 'Drums / Leader',
    instrument: 'Tama Imperialstar',
    description: 'The energetic leader of Kessoku Band. She dreams of playing at the Budokan.',
    color: CharacterColor.Yellow,
    themeColorHex: '#eab308', // yellow-500
    imageUrl: 'https://picsum.photos/seed/nijika/600/900',
  },
  {
    id: 'ryo',
    name: 'Ryo Yamada',
    kanji: '山田 リョウ',
    role: 'Bass / Composer',
    instrument: 'Fender Precision Bass',
    description: 'The cool, mysterious bassist who is perpetually broke due to buying expensive gear.',
    color: CharacterColor.Blue,
    themeColorHex: '#2563eb', // blue-600
    imageUrl: 'https://picsum.photos/seed/ryo/600/900',
  },
  {
    id: 'kita',
    name: 'Ikuyo Kita',
    kanji: '喜多 郁代',
    role: 'Vocals / Rhythm Guitar',
    instrument: 'Gibson Les Paul Junior',
    description: 'A cheerful, social butterfly who joined the band to be close to Ryo. The "Kita-aura" is blinding.',
    color: CharacterColor.Red,
    themeColorHex: '#ef4444', // red-500
    imageUrl: 'https://picsum.photos/seed/kita/600/900',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: '1', title: 'Live at STARRY', imageUrl: 'https://picsum.photos/seed/rock1/800/600', size: 'large' },
  { id: '2', title: 'Practice Session', imageUrl: 'https://picsum.photos/seed/rock2/400/400', size: 'small' },
  { id: '3', title: 'After School', imageUrl: 'https://picsum.photos/seed/rock3/400/600', size: 'medium' },
  { id: '4', title: 'Equipment', imageUrl: 'https://picsum.photos/seed/rock4/400/400', size: 'small' },
  { id: '5', title: 'Street Live', imageUrl: 'https://picsum.photos/seed/rock5/400/400', size: 'small' },
  { id: '6', title: 'Group Photo', imageUrl: 'https://picsum.photos/seed/rock6/800/400', size: 'medium' },
  { id: '7', title: 'Mango Box', imageUrl: 'https://picsum.photos/seed/rock7/400/600', size: 'medium' },
  { id: '8', title: 'New Guitar', imageUrl: 'https://picsum.photos/seed/rock8/400/400', size: 'small' },
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  { id: '1', date: 'Spring 2022', title: 'Formation', description: 'Nijika discovers a lonely Hitori in the park.', icon: 'star' },
  { id: '2', date: 'Summer 2022', title: 'First Audition', description: 'The band struggles but passes the audition at STARRY.', icon: 'music' },
  { id: '3', date: 'Autumn 2022', title: 'School Festival', description: 'Kessoku Band performs at the Shuka High culture festival.', icon: 'star' },
  { id: '4', date: 'Winter 2022', title: 'Demo Recording', description: 'Recording their first original songs for the demo CD.', icon: 'camera' },
];
