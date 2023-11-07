export class Word {
    word: string;
    hide: string;
    constructor(word: string, hide: string) {
        this.word = word;
        this.hide = hide;
    }
}
export const MockWords: Word[] = [
    { word: "cornedrue", hide: "#o######e" },
    { word: "cognards", hide: "c######s" },
    { word: "fourchelang", hide: "########a#g" },
    { word: "gringotts", hide: "######tts" },
    { word: "hyppogriffes", hide: "####o######s" },
];