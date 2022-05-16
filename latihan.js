Vue.component('tugas-list', {
    template: '<div><tugas v-for="tugas in tugases">{{ tugas.tugas }}</tugas></div>',
    data() {
        return {
            tugases: [
                {tugas: 'Tugas Pertama', selesai: true},
                {tugas: 'Tugas Kedua', selesai: false},
                {tugas: 'Tugas Ketiga', selesai: true},
                {tugas: 'Tugas Keempat', selesai: false}
            ]
        };
    }
});

Vue.component('tugas', {
    template: '<li><slot></slot></li>'
});

new Vue({
    el: '#root'
});