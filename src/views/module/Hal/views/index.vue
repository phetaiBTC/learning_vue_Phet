<template>
    <headerHal />
    <section
        class="bg-[url('/images/Halbg.jpg')] bg-cover bg-center h-[100vh] w-full flex lg:items-start items-center flex-col justify-center">
        <div class="w-[50%] lg:ml-10">
            <a href="" class=" bg-white px-3 py-2 rounded-full"><i class="fab fa-ravelry text-red-600"></i> Hi, let'
                work
                together</a>
            <h1 class="text-6xl text-white mt-4">
                HAL<br>
                GROUP HOLDING
            </h1>
            <h2 class="text-white mb-10">
                Lorem ipsum dolor sit amet consectetur. Porttitor aliquam amet dictum quam odio. Vitae varius ut
                convallis
                non sed lacus turpis vitae. Viverra scelerisque donec id nulla ut enim enim. Et blandit vitae leo eget
                mauris est. Est elementum enim sit purus lectus. Eu pellentesque morbi at pellentesque diam est.
                Consequat
                ullamcorper eget arcu pellentesque pulvinar. Diam nunc at ut diam molestie purus ornare porttitor. Quis
                condimentum ornare tellus sit pellentesque.
            </h2>
            <a href="" class=" bg-red-600 px-3 py-2 rounded-full"><i class="fab fa-ravelry text-white"></i> Hi, let'
                work
                together</a>
        </div>
    </section>
    <section class=" bg-white flex w-[100%] items-center justify-around py-10">
        <div class="flex flex-row w-[90%] gap-5 pb-10 border-b-2 border-black">
            <div>
                <h1 class="text-text2">About Us</h1>
                <h1 class="text-text1 text-3xl">Who We Are</h1>
                <h1 class="text-text2 mb-4">Welcome To HAL Group Holding</h1>
                <a href="" class=" bg-red-600 px-3 py-2 rounded-full">
                    <i class="fab fa-ravelry text-white"></i>
                    About Us
                </a>
                <h1 class="text-text2  mt-4">Welcome to HAL Group Holding, a diversified conglomerate with a rich
                    heritage and
                    a forward-thinking approach. Established in [Year], HAL Group Holding has grown into a prominent
                    player in various industries, including real estate, finance, technology, and healthcare. Our
                    mission is to create sustainable value for our stakeholders through innovative solutions, strategic
                    investments, and unwavering commitment to excellence. At HAL Group Holding, we believe in the power
                    of diversity, synergy, and corporate responsibility to drive progress and foster long-term growth.
                </h1>
            </div>
            <img src="/images/aboutUs.png" alt="">
        </div>
    </section>
    <section class=" bg-white flex w-[100%] items-center justify-around py-10">
        <div class="flex flex-col w-[90%] gap-5 pb-10">
            <div class="w-[50%]">
                <h1 class="text-text2">What we do</h1>
                <h1 class="text-red-600 text-3xl">What we do</h1>
                <h1 class=" text-red-600 text-2xl">HAL Express</h1>
                <h1 class="text-text2 mb-4">Lorem ipsum dolor sit amet consectetur. Id tempor libero porttitor tincidunt
                    volutpat. Pulvinar eleifend proin sed ante placerat libero libero sed. Posuere nisi arcu sed amet
                    nisi lorem. Aliquet nulla gravida in tellus ut.</h1>

            </div>
            <div class="flex w-full flex-col items-end">
                <div class="w-full flex flex-row justify-around items-center gap-10">
                    <div v-for="(item, index) in card" :key="index" class="flex flex-col justify-center items-center">
                        <img :src="item.url" alt="..." class="w-[200px]">
                        <h1 class=" text-red-600 text-3xl mb-0">0{{ index + 1 }}</h1>
                        <h1>{{ item.name }}</h1>
                    </div>
                </div>
            </div>

        </div>
    </section>
    <section class=" bg-white flex w-[100%] items-center justify-around py-10">
        <div class="flex flex-col w-[90%] gap-5 pb-10 ">
            <div class="w-[50%]">
                <h1 class="text-text2">Investments</h1>
                <h1 class="text-red-600 text-3xl mb-10">Company</h1>
                <a href="" class=" bg-red-600 px-3 py-2 rounded-full">
                    <i class="fab fa-ravelry text-white"></i>
                    see more
                </a>

            </div>
            <div class="flex w-full flex-col items-end">
                <div class="w-full flex flex-row justify-around items-center gap-10">
                    <div v-for="(item, index) in card" :key="index" class="flex flex-col justify-center items-center">
                        <img :src="item.url" alt="..." class="w-[250px]">
                    </div>
                </div>
                <div class="flex gap-8 mt-2">
                    <i class="fas fa-arrow-left rounded-full bg-red-600 p-3 text-white"></i>
                    <i class="fas fa-arrow-right rounded-full bg-red-600 p-3 text-white"></i>
                </div>
            </div>

        </div>
    </section>
    <section class=" bg-white flex w-[100%] items-center justify-around py-10">
        <div class="flex flex-col w-[90%] gap-5 pb-10 ">
            <div class="w-[50%]">
                <h1 class="text-text2">partner and client</h1>
                <h1 class="text-red-600 text-3xl mb-10">partner and client</h1>
                <a href="" class=" bg-red-600 px-3 py-2 rounded-full">
                    <i class="fab fa-ravelry text-white"></i>
                    see more
                </a>

            </div>
            <div class="flex w-full flex-col items-end">
                <div class="w-full flex flex-row justify-around items-center gap-10">
                    <div v-for="(item, index) in partNer" :key="index"
                        class="flex flex-col justify-center items-center">
                        <img :src="item.url" alt="..." class="w-[250px]">
                    </div>
                </div>
                <div class="flex gap-8 mt-2">
                    <i class="fas fa-arrow-left rounded-full bg-red-600 p-3 text-white"></i>
                    <i class="fas fa-arrow-right rounded-full bg-red-600 p-3 text-white"></i>
                </div>
            </div>

        </div>
    </section>
    <section class=" bg-white flex w-[100%] items-center justify-around py-10">
        <div class="flex flex-col w-[90%] gap-5 pb-10 ">
            <div class="w-[50%]">
                <h1 class="text-text2">partner and client</h1>
                <h1 class="text-red-600 text-3xl mb-10">partner and client</h1>
                <a href="" class=" bg-red-600 px-3 py-2 rounded-full">
                    <i class="fab fa-ravelry text-white"></i>
                    see more
                </a>

            </div>
            <div class="flex w-full flex-col items-end">
                <div class="w-full flex flex-row justify-around items-center gap-10">
                    <div v-for="(item, index) in award" :key="index" class="flex flex-col justify-center items-center">
                        <img :src="item.url" alt="..." class="w-[250px]">
                    </div>
                </div>

            </div>

        </div>
    </section>
    <section class=" bg-white flex w-[100%] items-center justify-around py-10">
        <div class="flex flex-col w-[90%] gap-5 pb-10 border-b-2 border-black">
            <div>
                <h1 class="text-text2">News</h1>
                <h1 class="text-red-600 text-3xl">News</h1>
                <a href="" class=" bg-red-600 px-3 py-2 rounded-full">
                    <i class="fab fa-ravelry text-white"></i>
                    see more
                </a>

            </div>
            <div class="flex flex-row gap-4">
                <img src="/images/new.png" class="w-[50%]" alt="">
                <div class="mt-10">
                    <h1 class="text-red-600 text-3xl">In Celebration Of International Children's Day And National Tree
                        Planting Day</h1>
                    <h1 class="text-text2  mt-4">Welcome to HAL Group Holding, a diversified conglomerate with a rich
                        On May 25, 2024, The Event Was Led By Mrs. Sisomphon Phomvilay, Deputy Director Of The Marketing
                        Department, Along With VIP Retailers And The Team Who Joined The Event In A Vibrant Procession.
                        <br><br>
                        04 July 2024
                    </h1>
                </div>
            </div>
            <div class="flex flex-row justify-around items-center w-full mt-5 gap-5">
                <div v-for="(item,index) in news" :key="index" class="flex flex-col overflow-hidden rounded-2xl border w-[25%]">
                    <img :src="item.url" alt="" class="">
                    <div class="mt-3 flex flex-col items-center justify-center px-3">
                        <h1 class="text-red-600 text-xl">{{ item.title }}</h1>
                        <h1 class="text-text2  ">{{ item.Deriception }}
                            <br><br>
                            {{ item.date }}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import headerHal from '../components/headerHal.vue';

import { ref } from 'vue';
const card = ref([
    { url: "/images/list1.png", name: "HAL Express" },
    { url: "/images/list4.png", name: "HAL Center Live (E-Commerce)" },
    { url: "/images/list2.png", name: "HAL Pay" },
    { url: "/images/list3.png", name: "Synergy" },
])
const partNer = ref([
    { url: "/images/part1.png", },
    { url: "/images/part2.png", },
    { url: "/images/part3.png", },
    { url: "/images/part4.png", },
    { url: "/images/part5.png", },
    { url: "/images/part6.png", },
])
const award = ref([
    { url: "/images/award1.png", },
    { url: "/images/award2.png", },
    { url: "/images/award3.png", },
    { url: "/images/award4.png", },
    { url: "/images/award5.png", },
])

const news = ref([
    {
        url: "/images/new.png",
        title: "Hal Group. Invests In Community Development Projects",
        Deriception: "Welcome to HAL Group Holding, a diversified conglomerate with a Lorem ipsum consectetur, id tempor libero porttitor tincidunt volutpat...",
        date: "04 July 2024"
    },
    {
        url: "/images/new.png",
        title: "Hal Group. Invests In Community Development Projects",
        Deriception: "Welcome to HAL Group Holding, a diversified conglomerate with a Lorem ipsum consectetur, id tempor libero porttitor tincidunt volutpat...",
        date: "04 July 2024"
    },
    {
        url: "/images/new.png",
        title: "Hal Group. Invests In Community Development Projects",
        Deriception: "Welcome to HAL Group Holding, a diversified conglomerate with a Lorem ipsum consectetur, id tempor libero porttitor tincidunt volutpat...",
        date: "04 July 2024"
    },
    {
        url: "/images/new.png",
        title: "Hal Group. Invests In Community Development Projects",
        Deriception: "Welcome to HAL Group Holding, a diversified conglomerate with a Lorem ipsum consectetur, id tempor libero porttitor tincidunt volutpat...",
        date: "04 July 2024"
    },
])
</script>

<style>
* {
    color: black
}
</style>