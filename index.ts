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
  new Surah("at-takatsur", 102, 8, undefined),
  new Surah("al-qoriah", 101, 11, undefined),
  new Surah("al-adiyat", 100, 11, undefined),
  new Surah("az-zalzalah", 99, 8, undefined),
  new Surah("an-naba", 98, 8, undefined)
];

function getRandomSurah(): Surah {
  const random: number = Math.floor(Math.random() * surahDb.length);
  return surahDb[random];
}

function randomAll(): void {
  const randomSurah: Surah = getRandomSurah();
  const result = `✉️ surah: ${randomSurah.name},
🔁 verse: ${randomSurah.getRandomVerse()}`;

  alert(result);
}
