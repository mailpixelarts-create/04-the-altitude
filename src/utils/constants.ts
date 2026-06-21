export const SITE_NAME = 'THE ALTITUDE';
export const SITE_TAGLINE = 'Above the Clouds';
export const SITE_DESCRIPTION = 'A luxury mountaintop café suspended above the clouds';

export const COLORS = {
  snow: '#F9F9F7',
  granite: '#777777',
  sky: '#AFCDEB',
  deepBlue: '#28435E',
  wood: '#7D5F49',
  cloudWhite: '#FFFFFF',
  charcoal: '#1D1D1D',
} as const;

export const NAV_LINKS = [
  { label: 'Story', href: '#story' },
  { label: 'Coffee', href: '#coffee' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Observatory', href: '#observatory' },
  { label: 'Ritual', href: '#ritual' },
  { label: 'Visit', href: '#visit' },
] as const;

export const SIGNATURE_COFFEES = [
  {
    name: 'Summit Blend',
    origin: 'Ethiopia Yirgacheffe × Guatemala Antigua',
    notes: ['Jasmine', 'Dark Chocolate', 'Citrus Zest'],
    elevation: '2,200m',
    description: 'Our signature single-origin hybrid. Harvested at peak altitude where morning mist meets volcanic soil.',
    price: '$8.50',
  },
  {
    name: 'Cloud Nine',
    origin: 'Colombia Huila',
    notes: ['Caramel', 'Red Apple', 'Vanilla'],
    elevation: '1,900m',
    description: 'A bright, clean cup that tastes like sunrise through alpine glass. Light roast perfection.',
    price: '$7.80',
  },
  {
    name: 'Alpine Noir',
    origin: 'Sumatra Mandheling × Kenya AA',
    notes: ['Smoked Cedar', 'Blackberry', 'Dark Honey'],
    elevation: '1,600m',
    description: 'Deep, brooding, and contemplative. For those who watch storms roll in from the observatory.',
    price: '$9.20',
  },
] as const;

export const MENU_SEASONS = [
  {
    season: 'Winter Summit',
    items: [
      { name: 'Truffle Cloud Eggs', desc: 'Soft-poached, black truffle foam, sourdough crisp', price: '$24' },
      { name: 'Alpine Fondue', desc: 'Gruyère, Emmental, white wine, mountain bread', price: '$32' },
      { name: 'Glacier Water Salmon', desc: 'Cedar-smoked, citrus beurre blanc, micro greens', price: '$38' },
      { name: 'Pine Forest Risotto', desc: 'Wild mushroom, pine nut, shaved Parmigiano', price: '$28' },
    ],
  },
  {
    season: 'Spring Thaw',
    items: [
      { name: 'Asparagus Velvet', desc: 'English peas, mint oil, ricotta cloud', price: '$22' },
      { name: 'Mountain Lamb', desc: 'Herb-crusted, rosemary jus, root vegetables', price: '$42' },
      { name: 'Cloud Berry Pavlova', desc: 'Swiss meringue, crème fraîche, alpine berries', price: '$18' },
      { name: 'Wild Garlic Flatbread', desc: 'Wood-fired, mozzarella, edible flowers', price: '$20' },
    ],
  },
  {
    season: 'Autumn Ascent',
    items: [
      { name: 'Pumpkin Bisque', desc: 'Brown butter, toasted pepitas, sage cream', price: '$18' },
      { name: 'Venison Loin', desc: 'Juniper glaze, chestnut purée, kale chips', price: '$48' },
      { name: 'Pear Tarte Tatin', desc: 'Caramelized orchard pear, vanilla bean ice cream', price: '$20' },
      { name: 'Mushroom Trio', desc: 'Chanterelle, porcini, shiitake, polenta', price: '$26' },
    ],
  },
  {
    season: 'Summer Summit',
    items: [
      { name: 'Chilled Cucumber Soup', desc: 'Dill, crème fraîche, micro herbs', price: '$16' },
      { name: 'Trout en Papillote', desc: 'Lemon, capers, wild herbs, mountain butter', price: '$36' },
      { name: 'Elderflower Sorbet', desc: 'Sparkling water, fresh mint, edible flowers', price: '$14' },
      { name: 'Garden Crudités', desc: 'Seasonal vegetables, hummus, herb oil', price: '$18' },
    ],
  },
] as const;

export const GALLERY_ITEMS = [
  { src: '/gallery/dawn.jpg', alt: 'First light hitting the glass pavilion', caption: 'First Light' },
  { src: '/gallery/clouds.jpg', alt: 'Sea of clouds below the observatory', caption: 'Cloud Sea' },
  { src: '/gallery/interior.jpg', alt: 'Warm interior with fireplace glow', caption: 'Warmth Within' },
  { src: '/gallery/coffee.jpg', alt: 'Artisan pour-over in morning light', caption: 'The Pour' },
  { src: '/gallery/mountains.jpg', alt: 'Panoramic alpine vista', caption: 'Infinite Range' },
  { src: '/gallery/sunset.jpg', alt: 'Golden hour from the terrace', caption: 'Golden Hour' },
] as const;

export const OBSERVATORY_HOTSPOTS = [
  { id: 'mont-blanc', label: 'Mont Blanc', elevation: '4,808m', x: 45, y: 35 },
  { id: 'matterhorn', label: 'Matterhorn', elevation: '4,478m', x: 62, y: 40 },
  { id: 'eiger', label: 'Eiger North Face', elevation: '3,967m', x: 28, y: 42 },
  { id: ' Jungfrau', label: 'Jungfrau', elevation: '4,158m', x: 55, y: 30 },
] as const;

export const SUSTAINABILITY_STATS = [
  { value: '100%', label: 'Renewable Energy' },
  { value: '0', label: 'Carbon Footprint' },
  { value: '85%', label: 'Water Recycled' },
  { value: '12km', label: 'Local Sourcing Radius' },
] as const;

export const TIMELINE_EVENTS = [
  { year: '2019', title: 'Vision Born', desc: 'Concept conceived during a sunrise at 3,200m' },
  { year: '2020', title: 'Breaking Ground', desc: 'Sustainable construction begins above the treeline' },
  { year: '2021', title: 'Glass Pavilion', desc: 'The observatory structure takes shape against the sky' },
  { year: '2022', title: 'First Pour', desc: 'THE ALTITUDE opens its doors to the world' },
  { year: '2023', title: 'Carbon Neutral', desc: 'Achieving zero-impact operations' },
  { year: '2024', title: 'Michelin Green', desc: 'Recognized for sustainable excellence' },
] as const;
