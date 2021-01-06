new Vue({
    el: "#app",
    data: {
        message: "Hello Vue.js!!"
    },
    created:function(){
        console.log("index.js  Create!!")
    },
    methods:{
        initData:function(){
            console.log("index init")
        },
    },
    mounted:function () {
        var vm = this;
        vm.initData();
    }
});