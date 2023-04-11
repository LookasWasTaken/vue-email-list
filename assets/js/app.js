/*
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

const { createApp } = Vue
  
createApp({
  data() {
    return {
      mailsToGenerate: 10,
      generationComplete: false,
      apiURL: 'https://flynn.boolean.careers/exercises/api/random/mail',
      generatedMails: [],
      errorPresent: false,
    }
  },
  mounted() {
    for (let i = 0; i < this.mailsToGenerate; i++) {
      axios
      .get(this.apiURL)
      .then(response => {
        this.generatedMails.push(response.data.response);
        i === this.mailsToGenerate - 1 ? this.generationComplete = true : '';
      })
      .catch(error => {
        console.error(`Error: ${error.message}`);
        this.errorPresent = true;
      })
    }
  }
}).mount('#app')