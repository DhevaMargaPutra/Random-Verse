"use strict";
//
var Surah = /** @class */ (function () {
    function Surah(name, indexSurah, verseCount) {
        this.name = name;
        this.indexSurah = indexSurah;
        this.verseCount = verseCount;
    }
    Object.defineProperty(Surah.prototype, "randomVerse", {
        get: function () {
            return Math.floor(Math.random() * this.verseCount + 1);
        },
        enumerable: true,
        configurable: true
    });
    return Surah;
}());
// Database Surah and Verse 📘
var surahDb = [
    new Surah("an-nas", 114, 6),
    new Surah("al-falaq", 113, 5)
];
function randomSurah() {
    var random = Math.floor(Math.random() * surahDb.length + 1);
    console.log(surahDb[random]);
    return surahDb[random];
}
