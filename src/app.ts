export class Word {
  word: string;
  hide: string;
  constructor(word: string, hide: string) {
    this.word = word;
    this.hide = hide;
  }
}
enum Status {
  Progress,
  Loser,
  Winner,
}
class Game {
  words: Word[];
  attempts: number;
  status: Status;
  constructor(words: Word[]) {
    this.words = words;
    this.attempts = 0;
    this.status = Status.Progress;
  }
  checkWin(word: Word): boolean {
    return word.hide === word.word;
  }
  run() {
    console.log("Bienvenue dans le jeu!");
    console.log("Vous avez 7 tentatives.");
    const randomIndex = Math.floor(Math.random() * this.words.length);
    const selectedWord = this.words[randomIndex];
    while (this.attempts < 7 && this.status === Status.Progress) {
      console.log(`Mot : ${selectedWord.hide}`);
      const guess = "c";
      if (selectedWord.word.includes(guess)) {
        selectedWord.hide = selectedWord.word
          .split("")
          .map((letter, index) =>
            letter === guess ? guess : selectedWord.hide[index]
          )
          .join("");
      } else {
        this.attempts++;
      }
      if (this.checkWin(selectedWord)) {
        this.status = Status.Winner;
      }
    }
    if (this.status === Status.Winner) {
      console.log(`Bravo, gagné! Le mot etait "${selectedWord.word}".`);
    } else {
      console.log(`Désolé, perdu. Le mot etait "${selectedWord.word}".`);
    }
  }
}

const words = [
  { word: "cornedrue", hide: "#o######e" },
  { word: "cognards", hide: "c######s" },
  { word: "fourchelang", hide: "########a#g" },
  { word: "gringotts", hide: "######tts" },
  { word: "hyppogriffes", hide: "####o######s" },
];

const game = new Game(words);
game.run();