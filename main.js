document.addEventListener('DOMContentLoaded', function() {
    let app = new Vue({
        el: '#app',
        data: {
            swing: false,
            blood: false,
            health: 100
        },
        methods: {
            showBlood: function() {
                this.health -= 10;
                if(this.health <= 0) {
                    this.blood = true;
                }
            },
            reset: function() {
                this.swing = false;
                this.health = 100;
                this.blood = false;
            },

        }
    })
})