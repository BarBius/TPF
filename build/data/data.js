"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockWords = exports.Word = void 0;
class Word {
    word;
    hide;
    constructor(word, hide) {
        this.word = word;
        this.hide = hide;
    }
}
exports.Word = Word;
exports.MockWords = [
    { word: "cornedrue", hide: "#o######e" },
    { word: "cognards", hide: "c######s" },
    { word: "fourchelang", hide: "########a#g" },
    { word: "gringotts", hide: "######tts" },
    { word: "hyppogriffes", hide: "####o######s" },
];
