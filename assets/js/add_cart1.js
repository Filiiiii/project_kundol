

new Vue({
    el: '.app',
    data: {
        count: 0,
        fullData: [],
        getProducts: [],
        infcart: null,
        isActive: false,
        searchQuery: null,
        products: [
            {
                id: 1,
                name: "Lipstick Velvet Matte",
                image: "assets/image/product-1.png",
                sl: 1,
                price: 1200
            },
            {
                id: 2,
                name: "Eyebrown Gel Waterproof",
                image: "assets/image/product-2.png",
                sl: 1,
                price: 700
            },
            {
                id: 3,
                name: "Makeup Brush Set",
                image: "assets/image/product-3.png",
                sl: 1,
                price: 1700
            },
            {
                id: 4,
                name: "BB Cream Whitening",
                image: "assets/image/product-4.png",
                sl: 1,
                price: 300
            },
        ]
    },
    created() {
        // this.fullData = JSON.parse(localStorage.getItem("fullData") || '[]')
        this.fullData = JSON.parse(localStorage.getItem("fullData")) || [];
    },
    mounted() {
        this.getProducts = JSON.parse(localStorage.getItem("fullData")) || [];
        console.log(this.getProducts);
    },
    methods: {
        totalSl: function () {
            var tongsl = 0;
            this.fullData.forEach(i => {
                tongsl += i.sl

            });
            return tongsl;
        },
        total: function () {
            var tong = 0;
            this.fullData.forEach(i => {
                tong += i.price * i.sl;
            });
            this.getProducts.forEach(i => {
                tong += i.price * i.sl;
            });
            return tong;
        },
        cong: function (id) {
            var max = 50; /// max number
            for (i = 0; i < this.fullData.length; i++) {
                if (this.fullData[i].id == id && this.fullData[i].sl < max) {
                    this.fullData[i].sl++
                }
            }
            for (i = 0; i < this.getProducts.length; i++) {
                if (this.getProducts[i].id == id && this.getProducts[i].sl < max) {
                    this.getProducts[i].sl++
                }
            }
        },
        tru: function (id) {
            var min = 0; /// min number

            for (i = 0; i < this.fullData.length; i++) {
                if (this.fullData[i].id == id && this.fullData[i].sl > min) {
                    this.fullData[i].sl--
                }
                if (this.fullData.sl > 1) {
                    this.isActive == true;
                }
            }
            for (i = 0; i < this.getProducts.length; i++) {
                if (this.getProducts[i].id == id && this.getProducts[i].sl > min) {
                    this.getProducts[i].sl--
                }
                if (this.getProducts.sl > 1) {
                    this.isActive == true;
                }
            }
        },
        addProduct: function (value) {
            debugger
            search = false; // bien cờ
            if (this.fullData.length == 0) { // gio hang khong co gi thi bien cờ la false
                search = false
            }
            else {
                for (i = 0; i < this.fullData.length; i++) { //duyệt qua giỏ hàng
                    if (this.fullData[i].name == value) {
                        search = true
                    }
                }
            }

            if (search == false) {
                for (i = 0; i < this.products.length; i++) {
                    if (this.products[i].name == value) {
                        this.fullData.push(this.products[i]);
                        // localStorage.setItem("fullData", JSON.stringify(this.fullData));
                        // this.getProducts = JSON.parse(localStorage.getItem(this.fullData));
                        $(".notifications").slideToggle("slow").delay(800).slideToggle("slow");
                    }
                }
            }
            else {
                for (i = 0; i < this.fullData.length; i++) {
                    if (this.fullData[i].name == value) {
                        this.fullData[i].sl += 1
                        localStorage.setItem("fullData", JSON.stringify(this.fullData));
                        this.getProducts = JSON.parse(localStorage.getItem(this.fullData));
                    }
                }
            }
        },
        removeProduct: function (i) {
            // localStorage.removeItem(this.fullData[i]);
            // localStorage.removeItem(this.getProducts[i]);
            this.fullData.splice(i, 1);
            // this.getProducts.splice(i, 1);
            localStorage.setItem('fullData', JSON.stringify(this.fullData));
            // this.getProducts = JSON.parse(localStorage.getItem(this.fullData));
        },
        removeAll: function () {
            this.fullData = [];
        },

    }
})