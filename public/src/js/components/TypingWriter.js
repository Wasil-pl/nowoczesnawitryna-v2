import TypeIt from "../../utils/typeit/dist/index.es.js";

class TypingWriter {
  constructor(descryptionContainer, descriptions) {
    const thisTypingWriter = this;

    thisTypingWriter.descryptionContainer = descryptionContainer;
    thisTypingWriter.descriptions = descriptions;

    thisTypingWriter.init();
  }

  init() {
    const thisTypingWriter = this;

    thisTypingWriter.typeIt = new TypeIt(
      thisTypingWriter.descryptionContainer,

      {
        startDelay: 900,
        speed: 70,
        loop: false,
        breakLines: false,
        nextStringDelay: 1000,
      }
    )
      .type(thisTypingWriter.descriptions[0], { delay: 100 })
      .move(-10)
      .type(thisTypingWriter.descriptions[1], { delay: 400 })
      .move(null, { to: "START", instant: true, delay: 400 })
      .move(1, { delay: 200 })
      .delete(1, { delay: 225 })
      .type(thisTypingWriter.descriptions[2], { delay: 225 })
      .pause(200)
      .move(7, { instant: true, delay: 200 })
      .delete(1, { delay: 200 })
      .type(thisTypingWriter.descriptions[3], { delay: 200 })
      .pause(200)
      .move(6, { instant: true, delay: 200 })
      .type(thisTypingWriter.descriptions[4], { delay: 200 })
      .move(null, { to: "END" })
      .type(thisTypingWriter.descriptions[5])
      .type(thisTypingWriter.descriptions[6])
      .pause(500)
      .delete(14)
      .pause(200)
      .type(thisTypingWriter.descriptions[7])
      .pause(200)
      .type(thisTypingWriter.descriptions[8])

      .go();
  }
}

export default TypingWriter;
