const ACTORS = [
  'Morgan Freeman',
  'Bruce Lee',
  'Sean Connery',
  'George Lazenby',
  'Roger Moore',
  'Timothy Dalton',
  'Pierce Brosnan',
  'Daniel Craig',
  'Willem Dafoe',
  'Barbara Carrera',
  'Kim Basinger',
  'Elizabeth Taylor',
  'Leonardo DiCaprio',
  'Cate Blanchett',
  'Helen Mirren',
  'Johnny Depp',
  'Hedy Lamarr',
  'Arnold Schwarzenegger',
  'Linda Hamilton',
  'Robert Patrick',
  'George Clooney',
  'Uma Thurman',
  'Alicia Silverstone',
  'Sylvester Stallone',
  'Erich von Stroheim',
  'Mary Beth Hughes',
  'Dan Duryea'
];

const WRITERS = [
  'Takeshi Kitano',
  'Neal Purvis',
  'Robert Wade',
  'Fyodor Dostoevsky',
  'Lev Tolstoy',
  'William Shakespeare',
  'Alexander Pushkin',
  'J.R.R. Tolkien',
  'George Orwell',
  'Publius Vergilius Maro',
  'William Wisher',
  'Akiva Goldsman',
  'Anne Wigton',
  'Heinz Herald',
  'Richard Weil'
];

const DIRECTORS = [
  'Tom Ford',
  'Lee Tamahori',
  'Robert B. Weide',
  'Steven Spielberg',
  'James Cameron',
  'Irvin Kershner',
  'Martin Scorsese',
  'Alfred Hitchcock',
  'Stanley Kubrick',
  'Tim Burton',
  'Ridley Scott',
  'Joel Schumacher',
  'Anthony Mann',
  'Wolfgang Petersen'
];

const GENRES = [
  'Comedy',
  'Drama',
  'Horror',
  'Film-Noir',
  'Sci-fi',
  'Fantasy',
  'Western',
  'Thriller',
  'Western',
  'Historical',
  'Animated',
  'Adventure',
  'Action',
  'Mystery',
  'Musical'
];

const TITLES = [
  'A Little Pony Without The Carpet',
  'Laziness Who Sold Themselves',
  'Terminator',
  'Terminator 2: Judgement Day',
  'Terminator 3: Rise of the Machines',
  'Terminator X: Revengeance',
  'Golden Eye',
  'Highlander',
  'Summer 2: Electric Boogaloo',
  'Mortal Kombat',
  'Mortal Kombat 2',
  'Die Another Day',
  'Goldfinger',
  'The World Is Not Enough',
  'Blade Runner',
  'Minority Report',
  'A.I.',
  'Die Hard',
  'The NeverEnding Story',
  'Escape Plan',
  'Nu, Pogodi!',
  'Alice in Wonderland',
  'The Man with the Golden Arm',
  'The Great Flamarion',
  'The Dance of Life',
  'Sagebrush Trail',
  'Santa Claus Conquers the Martians',
  'Popeye the Sailor Meets Sindbad the Sailor'
];


const AUTHORS = [
  'Boss Keks',
  'Alexei Stukov',
  'Rudolf',
  'Jeanne Dark',
  'Leo The Pold',
  'John Doe',
  'Imya Rek',
  'Johnny Smith',
  'Niko Kuznez',
  'Mary Sue',
  'Lady of the Lake',
  'Ilya',
  'Tim Macoveev'
];

const DESCRIPTIONS = [
  'Lorem! Ipsum Dolor...',
  `Oscar-winning film, a war drama about two young people,
  from the creators of timeless classic "Nu, Pogodi!" and "Alice in Wonderland",
  with the best fight scenes since Bruce Lee.`,
  `The film opens following a murder at a cabaret in Mexico City in 1936,
  and then presents the events leading up to it in flashback.
  The Great Flamarion (Erich von Stroheim) is an arrogant,
  friendless, and misogynous marksman
  who displays his trick gunshot act in the vaudeville circuit.
  His show features a beautiful assistant,
  Connie (Mary Beth Hughes) and her drunken husband Al (Dan Duryea),
  Flamarion's other assistant.
  Flamarion falls in love with Connie,
  the movie's femme fatale,
  and is soon manipulated by her into killing her
  no good husband during one of their acts.`,
  `Great film from the creators of "Place The Holder".
  Simple story about fluffy dog and his robotic friend.`,
  `Sentenced for a murder he did not commit,
  John Brant escapes from prison determined to find the real killer.
  By chance Brant's narrow escap…`,
  `Burlesque comic Ralph "Skid" Johnson (Skelly),
  and specialty dancer Bonny Lee King (Carroll),
  end up together on a cold, rainy night at a tr…`,
  `Curabitur lacinia, lacus a egestas auctor,
  massa enim commodo elit, neque mauris a nunc.
  Donec ipsum felis, ve facilisis tortor commodo etc…`
];

const COUNTRIES = [
  'USA',
  'Russia',
  'Great Britain',
  'France',
  'Italy',
  'Germany',
  'Japan',
  'China',
  'USSR',
  'Greece',
  'Zimbabwe',
  'Norway',
  'Spain',
  'Turkey',
  'Brazil',
  'India',
  'Denmark',
  'Kekistan',
  'Iraqistan',
  'Chernarus',
  'South Boreah',
  'Arstotzka',
  'Impor',
  'Kolechia',
  'Orbistan',
  'Antegria'
];

const COMMENT_TEXTS = [
  'Lorem! Ipsum Dolor...',
  'A film that changed my life, a true masterpiece, post-credit scene was just amazing omg.',
  'Nah...',
  'This is worthless.',
  'This is so sad story...',
  'Amazing!',
  '12/10',
  'Do not even try it',
  'Leave this place',
  'OMG!!!',
  'Dropped right after the start...',
  'Got any food?',
  'Nice film for sleep',
  'Interesting setting and a good cast',
  'Booooooooooring',
  'Very very old. Meh',
  'Almost two hours? Seriously?',
  'Woah, stop this nonsense'
];

const EMOTIONS = [
  'smile',
  'sleeping',
  'puke',
  'angry'
];

const POSTERS = [
  'made-for-each-other.png',
  'popeye-meets-sinbad.png',
  'sagebrush-trail.jpg',
  'santa-claus-conquers-the-martians.jpg',
  'the-dance-of-life.jpg',
  'the-great-flamarion.jpg',
  'the-man-with-the-golden-arm.jpg'
];

const AGE_RATINGS = [
  '0',
  '6',
  '12',
  '16',
  '18',
  '21'
];

const UPPER_RATING_BORDER = 10;
const HOUR = 60;
const LOWER_RUNTIME_BORDER = 45;
const UPPER_RUNTIME_BORDER = 250;
const DESCRIPTION_MAX_LENGTH = 140;

const FilterType = {
  ALL: 'all',
  WATCHLIST: 'watchlist',
  HISTORY: 'history',
  FAVORITES: 'favorites',
};

const UserLevel = {
  NONE: 'none',
  NOVICE: 'Novice',
  FAN: 'Fan',
  ['MOVIE BUFF']: 'Movie Buff',
};

export {
  ACTORS,
  WRITERS,
  DIRECTORS,
  GENRES,
  TITLES,
  AUTHORS,
  DESCRIPTIONS,
  COUNTRIES,
  COMMENT_TEXTS,
  EMOTIONS,
  POSTERS,
  AGE_RATINGS,
  UPPER_RATING_BORDER,
  LOWER_RUNTIME_BORDER,
  UPPER_RUNTIME_BORDER,
  DESCRIPTION_MAX_LENGTH,
  HOUR,
  FilterType,
  UserLevel,
};
