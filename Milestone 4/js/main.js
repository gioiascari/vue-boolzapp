console.log("Ok Vue Js");
/*Milestone 4
-Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo
“mar” rimangono solo Marco e Martina)
Milestone 5 - opzionale
- Cancella messaggio: cliccando sul messaggio appare un menu a tendina che
permette di cancellare il messaggio selezionato
- Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti*/
const contacts = [
  {
    name: "Michele",
    avatar: "_1",
    visible: true,
    messages: [
      {
        date: "10/01/2020 15:30:55",
        message: "Hai portato a spasso il cane?",
        status: "sent",
      },
      {
        date: "10/01/2020 15:50:00",
        message: "Ricordati di stendere i panni",
        status: "sent",
      },
      {
        date: "10/01/2020 16:15:22",
        message: "Tutto fatto!",
        status: "received",
      },
    ],
  },
  {
    name: "Fabio",
    avatar: "_2",
    visible: true,
    messages: [
      {
        date: "20/03/2020 16:30:00",
        message: "Ciao come stai?",
        status: "sent",
      },
      {
        date: "20/03/2020 16:30:55",
        message: "Bene grazie! Stasera ci vediamo?",
        status: "received",
      },
      {
        date: "20/03/2020 16:35:00",
        message: "Mi piacerebbe ma devo andare a fare la spesa.",
        status: "sent",
      },
    ],
  },
  {
    name: "Samuele",
    avatar: "_3",
    visible: true,
    messages: [
      {
        date: "28/03/2020 10:10:40",
        message: "La Marianna va in campagna",
        status: "received",
      },
      {
        date: "28/03/2020 10:20:10",
        message: "Sicuro di non aver sbagliato chat?",
        status: "sent",
      },
      {
        date: "28/03/2020 16:15:22",
        message: "Ah scusa!",
        status: "received",
      },
    ],
  },
  {
    name: "Alessandro B.",
    avatar: "_4",
    visible: true,
    messages: [
      {
        date: "10/01/2020 15:30:55",
        message: "Lo sai che ha aperto una nuova pizzeria?",
        status: "sent",
      },
      {
        date: "10/01/2020 15:50:00",
        message: "Si, ma preferirei andare al cinema",
        status: "received",
      },
    ],
  },
  {
    name: "Alessandro L.",
    avatar: "_5",
    visible: true,
    messages: [
      {
        date: "10/01/2020 15:30:55",
        message: "Ricordati di chiamare la nonna",
        status: "sent",
      },
      {
        date: "10/01/2020 15:50:00",
        message: "Va bene, stasera la sento",
        status: "received",
      },
    ],
  },
  {
    name: "Claudia",
    avatar: "_6",
    visible: true,
    messages: [
      {
        date: "10/01/2020 15:30:55",
        message: "Ciao Claudia, hai novità?",
        status: "sent",
      },
      {
        date: "10/01/2020 15:50:00",
        message: "Non ancora",
        status: "received",
      },
      {
        date: "10/01/2020 15:51:00",
        message: "Nessuna nuova, buona nuova",
        status: "sent",
      },
    ],
  },
  {
    name: "Federico",
    avatar: "_7",
    visible: true,
    messages: [
      {
        date: "10/01/2020 15:30:55",
        message: "Fai gli auguri a Martina che è il suo compleanno!",
        status: "sent",
      },
      {
        date: "10/01/2020 15:50:00",
        message: "Grazie per avermelo ricordato, le scrivo subito!",
        status: "received",
      },
    ],
  },
  {
    name: "Davide",
    avatar: "_8",
    visible: true,
    messages: [
      {
        date: "10/01/2020 15:30:55",
        message: "Ciao, andiamo a mangiare la pizza stasera?",
        status: "received",
      },
      {
        date: "10/01/2020 15:50:00",
        message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
        status: "sent",
      },
      {
        date: "10/01/2020 15:51:00",
        message: "OK!!",
        status: "received",
      },
    ],
  },
];
const emoji = [
  "😀",
  "😄",
  "😁",
  "🤣",
  "😊",
  "😇",
  "🙃",
  "😉",
  "😍",
  "😛",
  "😡",
  "😨",
  "😰",
  "😥",
  "😓",
  "🤗",
  "🤔",
  "🤭",
  "👍",
  "💪",
  "👋",
  "🤚",
  "✋",
  "🖖",
  "👌",
  "🙏",
  "☝️",
  "👻",
  "👽",
  "👾",
  "🤖",
  "🎃",
  "👶",
  "🧒",
  "👦",
  "👧",
  "🧑",
  "👱",
  "👨",
  "🐶",
  "🐱",
  "🐭",
  "🐹",
  "🐰",
  "🦊",
  "🐻",
  "🐼",
  "🐨",
  "🐯",
  "🦁",
];

const app = new Vue({
  el: "#boolzap",
  data: {
    contacts,
    active: 0,
    valueText: "",
    search: "",
    emoji,
    emojiSwitch: false,
    night: false,
    msgIndex: null,
  },
  methods: {
    //al click su un'amico si visualizza anche la chat
    chatActive(index) {
      this.active = index;
    },
    //Creo una funzione dove al suo interno esiste l'orario corrente del messaggio inviato dall'utente, il messaggio in sè
    // ed infine la risposta generata dopo 1s tramite il TimeOut

    addMessage(chatIndex) {
      chatIndex.push({
        date: `10/01/2020 ${this.hourGenerator()}`,
        message: this.valueText,
        status: "sent",
      });
      setTimeout(() => {
        const newReplyMessage = {
          date: `10/01/2020 ${this.hourGenerator()}`,
          message: "Ok",
          status: "received",
        };

        this.contacts[this.active].messages.push(newReplyMessage);
      }, 1000);
    },
    //ricerca utente su lista contatti
    searchContact() {
      this.contacts.forEach((element) => {
        if (element.name.toLowerCase().includes(this.search.toLowerCase())) {
          element.visible = true;
        } else {
          element.visible = false;
        }
      });
    },
    //TEMPO-----------------------------------------------
    getTime: function (time) {
      return time[time.length - 1].date.slice(11, -3);
      // let datetime = new Date(date);
      // let hours = datetime.getHours();
      // let minutes = datetime.getMinutes();
      // return `${hours}:${minutes}`;
    },
    getLastTime: function (time, i) {
      return time[i].date.slice(11, -3);
    },
    hourGenerator: function () {
      let today = new Date();
      let hh = String(today.getHours()).padStart(2, "0");
      let mm = String(today.getMinutes()).padStart(2, "0");
      let ss = String(today.getSeconds()).padStart(2, "0");
      today = hh + ":" + mm + ":" + ss;
      return today;
    },

    /*---NIGHT-MODE---- */
    nightMode: function () {
      this.night = !this.night;
    },
    //Inserimento emoji
    emojiToggle() {
      this.emojiSwitch = !this.emojiSwitch;
    },
    insertEmoji(element) {
      this.valueText = this.valueText + element;
    },

    //Delete message
    remove: function (i) {
      this.contacts[this.active].messages.splice(i, 1);
      this.msgIndex = -1;
    },
  },
});
