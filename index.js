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
    new Surah("an-nas", 114, 6, "النَس"),
    new Surah("al-falaq", 113, 5, undefined)
];
function getRandomSurah() {
    var random = Math.floor(Math.random() * surahDb.length);
    return surahDb[random];
}
function randomAll() {
    var randomSurah = getRandomSurah();
    return "\u2709\uFE0Fsurah: " + randomSurah.name + ",\n\uD83D\uDD01verse: " + randomSurah.getRandomVerse();
}
