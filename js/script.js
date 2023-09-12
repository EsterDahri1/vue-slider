/*const slides = [
{
    image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

console.log(slides);*/

/*
Bonus: 
1- al click su una thumb, visualizzare in grande l'immagine corrispondente 
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente 
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
*/

//inserisco la struttura di Vue e il link su html

const {createApp} = Vue

    createApp({
        data(){
            return{
                //Creo delle array contenenti il nome delle img, le immagini e la descrizione
                imageName:[
                    'Spiderman',
                    'Ratchet & Clank',
                    'Fortnite',
                    'Stray',
                    'Avengers'
                ],
                images:[
                    'img/1.webp',
                    'img/2.webp',
                    'img/3.webp',
                    'img/4.webp',
                    'img/5.webp'
                ],
                description:[
                    'a',
                    'a',
                    'a',
                    'a',
                    'a',
                ],

                //aggiungo autoscroll per far girare da sole le immagini
                autoScroll: true,
                //imposto il contatore delle immagini a 0
                counter: 0
            }
        },

        //aggiungo funzione per autoscroll
        methods: {
            //se next è vero allora incremento il contatore e faccio andare avanti alla slide successiva
            nextImg(nextPrev) {
                if (nextPrev == true) {
                    this.counter++;
                } else {
                    this.counter--;
                }

                //Se il counter è uguale alla lunghezza dell'array e quindi ho finito le immagini riparto dalla prima slide
                if(this.counter == this.images.length){
                    this.counter = 0;
                };

                //Se il counter è < di 0 allora parto dall'ultimo
                if (this.counter < 0){
                    this.counter = this.images.length - 1
                };
            },
            //Aggiungo una funzione che in base alla time function che setto io cambia l'immagine
            clickAuto(){
                //metto la time function di 3s = 3000ms
                setInterval(() => {
                    if (this.autoScroll) this.nextPrev(true)
                }, 3000)
            },

            mounted(){
                this.clickAuto()
            }

        }

    }).mount('#app')