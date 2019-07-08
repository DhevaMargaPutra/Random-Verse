// Surah class ✉️
class Surah {
  name: string;
  indexSurah: number;
  verseCount: number;

  constructor(name: string, indexSurah: number, verseCount: number) {
    this.name = name;
    this.indexSurah = indexSurah;
    this.verseCount = verseCount;
  }

  get randomVerse(): number {
    return Math.floor(Math.random() * this.verseCount + 1);
  }
}

// Database Surah and Verse 📘
const surahDb: Surah[] = [
  new Surah("an-nas", 114, 6),
  new Surah("al-falaq", 113, 5)
];

function randomSurah() {
  const random = Math.floor(Math.random() * surahDb.length + 1);
  console.log(surahDb[random]);
  return surahDb[random];
}
