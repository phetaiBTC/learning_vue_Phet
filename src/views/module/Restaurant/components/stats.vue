<template>
    <section class=" bg-color7  bg-cover bg-center relative flex flex-col items-center">
        <h1
            class="z-[2] state absolute translate-x-[-50%] translate-y-[-50%] left-1/2 top-0 px-10 bg-color4 py-1 text-4xl rounded-full">
            Menu
        </h1>
        <div class="w-full z-[1] state bg-[#fff] ">
            <a-carousel autoplay style="font-family: 'Madimi One';">
                <div v-for="(item, index) in items" :key="index">
                    <div class="flex justify-center lg:pt-[2%] pt-[10%] items-center">
                        <img :src="item.url" alt="img..." class="lg:w-[20%] w-[50%] lg:pl-[5%] mr-[2%]" />
                        <div>
                            <h1 class="text-text1 text-3xl lg:text-4xl mb-0">{{ item.title }}</h1>
                            <h2 class="text-text2 text-[70%] lg:text-xl">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus consequuntur
                            </h2>
                            <h1 class="text-color2 text-2xl lg:text-4xl flex">
                                {{ item.price }}
                                <button class="lg:hidden "><i class="fas fa-cart-shopping text-color1 ml-2" /></button>
                                <button
                                    class=" hidden hover:scale-110 transition text-color7 lg:flex bg-color1 px-5 text-2xl items-center justify-center rounded-full ml-[10%]">
                                    Order now
                                    <i class="fas fa-cart-shopping text-color7 ml-2" />
                                </button>
                            </h1>
                        </div>

                    </div>
                </div>
            </a-carousel>
        </div>
        <div class="a-card w-[90%] mt-10 state ">
            <a-card class="w-[100%]">
                <a-card-grid class="items-center justify-center flex flex-col" v-for="(item, index) in items"
                    :key="index">
                    <img :src="item.url" alt="" class="lg:w-[100%]">
                    <h1 class=" text-color5 lg:text-3xl mt-[-15%] text-[90%] mb-0">{{ item.title }}</h1>
                    <h2 class="text-text1 text-[7px]">
                        {{ item.dcaption }}
                    </h2>
                    <h1 class="text-color2 lg:text-4xl text-xs flex">
                        {{ item.price }}
                    </h1>
                </a-card-grid>
                
            </a-card>
        </div>
    </section>
</template>

<script setup lang="ts">
const items = [
    { url: "/images/burger.png", title: "Burger", price: "50,000 kip", dcaption: " Lorem ipsum dolor" },
    { url: "/images/burger3.png", title: "Pizza", price: "100,000 kip", dcaption: " Lorem ipsum dolor" },
    { url: "/images/burger2.png", title: "Sushi", price: "80,000 kip", dcaption: " Lorem ipsum dolor" },
    { url: "/images/burger3.png", title: "Pizza", price: "100,000 kip", dcaption: " Lorem ipsum dolor" },
    { url: "/images/burger2.png", title: "Sushi", price: "80,000 kip", dcaption: " Lorem ipsum dolor" },
    { url: "/images/burger.png", title: "Pizza", price: "100,000 kip", dcaption: " Lorem ipsum dolor" },
    // { url: "/images/burger.png", title: "Burger", price: "50,000 kip", dcaption: " Lorem ipsum dolor" },
];
</script>

<style scoped>
.a-card * {
    font-family: 'Madimi One';
}
</style>