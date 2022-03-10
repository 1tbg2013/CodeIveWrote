"use strict"
const app = Vue.createApp({
    data() {

        let Trail = function(name) {
            this.name = name;
            this.numLikes = 0;
            this.hikingNow = false;
            if (this.name === "Appalachian Trail") {
                this.id = 0;
                this.map = 'wholetrail.jpg';
                this.url = "https://appalachiantrail.org/";
                this.open = true;
                this.states = ['Georgia', 'North Carolina', 'Tennessee', 'Virginia', 'West Virginia',
                'Maryland', 'Pennsylvania', 'New York', 'Connecticut', 'Massachusetts', 'Vermont',
                'New Hampshire', 'Maine'];
            } else if (this.name === "Pacific Crest Trail") {
                this.id = 1;
                this.map = "PCTmap.png";
                this.url = "https://www.pcta.org/discover-the-trail/maps/";
                this.open = false;
                this.states = ['California', 'Oregon', 'Washington'];
            }
        }

        return {
            trails : [new Trail("Appalachian Trail"), new Trail("Pacific Crest Trail")],
            selectedVariant : 0
        }
    },
    methods: {
        updateVariant(index) {
            this.selectedVariant = index;
            console.log(index);
        },
        addLike() {
            this.trails[this.selectedVariant].numLikes+=1;
        }
    },
    computed: {
        name() {
            return this.trails[this.selectedVariant].name;
        },
        url() {
            return this.trails[this.selectedVariant].url;
        },
        numLikes() {
            return this.trails[this.selectedVariant].numLikes;
        },
        map() {
            return this.trails[this.selectedVariant].map;
        }
    }
})

