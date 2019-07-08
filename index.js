"use strict";
// Surah class ✉️
var Surah = /** @class */ (function () {
    //   constructor(name: string, indexSurah: number, verseCount: number) {
    //     this.name = name;
    //     this.indexSurah = indexSurah;
    //     this.verseCount = verseCount;
    //   }
    function Surah(name, indexSurah, verseCount, arabicName) {
        this.name = name;
        this.indexSurah = indexSurah;
        this.verseCount = verseCount;
        if (!arabicName)
            this.arabicName = name;
        else
            this.arabicName = arabicName;
    }
    Surah.prototype.getRandomVerse = function () {
        return Math.floor(Math.random() * this.verseCount + 1);
    };
    return Surah;
}());
// Database Surah and Verse 📘
var surahDb = [
    new Surah("at-takatsur", 102, 8, undefined),
    new Surah("al-qoriah", 101, 11, undefined),
    new Surah("al-adiyat", 100, 11, undefined),
    new Surah("az-zalzalah", 99, 8, undefined),
    new Surah("an-naba", 98, 8, undefined)
];
function getRandomSurah() {
    var random = Math.floor(Math.random() * surahDb.length);
    return surahDb[random];
}
function randomAll() {
    var randomSurah = getRandomSurah();
    var result = "\u2709\uFE0F surah: " + randomSurah.name + ",\n\uD83D\uDD01 verse: " + randomSurah.getRandomVerse();
    alert(result);
}
