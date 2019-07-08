// Surah class ✉️
class Surah {
  name: string;
  indexSurah: number;
  verseCount: number;
  arabicName: string;

  //   constructor(name: string, indexSurah: number, verseCount: number) {
  //     this.name = name;
  //     this.indexSurah = indexSurah;
  //     this.verseCount = verseCount;
  //   }

  constructor(
    name: string,
    indexSurah: number,
    verseCount: number,
    arabicName: string | undefined
  ) {
    this.name = name;
    this.indexSurah = indexSurah;
    this.verseCount = verseCount;
    if (!arabicName) this.arabicName = name;
    else this.arabicName = arabicName;
  }

  getRandomVerse(): number {
    return Math.floor(Math.random() * this.verseCount + 1);
  }
}

// Database Surah and Verse 📘
const surahDb: Surah[] = [
  new Surah("an-nas", 114, 6, "النَس"),
  new Surah("al-falaq", 113, 5, undefined)
];

function getRandomSurah(): Surah {
  const random: number = Math.floor(Math.random() * surahDb.length);
  return surahDb[random];
}

function randomAll(): string {
  const randomSurah: Surah = getRandomSurah();
  return `✉️surah: ${randomSurah.name},
🔁verse: ${randomSurah.getRandomVerse()}`;
}
