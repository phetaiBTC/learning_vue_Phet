<template>
    <headerComponent/>
    <section
        class="bg-gradient-to-r from-color2 to-color6 min-h-[90vh] w-full bg-cover bg-center flex justify-evenly items-center flex-col lg:flex-row relative">
        <div class=" z-[1] text-hero flex flex-col lg:w-[35%] w-[90%] text-6xl justify-center items-center">
            <h1 class="lg:mt-0 mt-[10%]">{{ $t("message.Campaign") }}
            </h1>
            <h2 class="text-xl text-gray-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Tempore veritatis quidem dolorum
            </h2>
            <div class="flex w-full justify-around mt-5">
                <button
                    class="px-7 border text-2xl rounded-full py-3 bg-color2 border-4 hover:scale-110 transition hover:bg-[#990029]">
                    Open menu
                </button>
            </div>
        </div>
        <div class="z-[2] relative">

            <div
                class="image-hero bg-[#FFF5E1] absolute right-[10%] rotate-12 top-[10%] w-[20%] h-[20%] border flex flex-col items-center justify-center rounded-full">
                <h1 class="text-5xl mb-0 text-color2">Only</h1>
                <h2 class="text-color2 text-2xl mb-0">today</h2>
            </div>
            <img src="/images/burger.png" alt="product..." width="600"
                class="image-hero drop-shadow-[0_35px_15px_#000]">
        </div>
        <div class=" top-[10%] right-[10%] rotate-45 absolute h-[20%] bg-color2 aspect-[1/1] rounded-[20%] z-[0]" />
        <div class=" top-[5%] left-[20%] rotate-12 absolute h-[10%] bg-color6 aspect-[1/1] rounded-[20%] z-[0]" />
        <div class=" top-[50%] right-[5%] rotate-45 absolute h-[10%] bg-color2 aspect-[1/1] rounded-[20%] z-[0]" />
        <div class=" bottom-[20%] right-[50%] rotate-45 absolute h-[50%] bg-color2 aspect-[1/1] rounded-[20%] z-[0]" />
        <div class=" bottom-[10%] left-[10%] rotate-12 absolute h-[15%] bg-color6 aspect-[1/1] rounded-[20%] z-[0]" />
    </section>
    <stats />
    <section class=" bg-color7 bg-cover bg-center relative flex flex-col items-center">
        <div
            class="w-[90%] state lg:h-[40%] h-[60%] mt-[5%] flex lg:flex-row gap-4 mb-5 flex-col justify-around items-center">
            <div
                class="lg:w-[40%] lg:h-[90%] w-[90%] h-[40%] rounded-2xl shadow-md bg-[#fff] px-7 flex transition items-center justify-between hover:scale-110">
                <div class="w-[60%]">
                    <h1 class=" text-color1 text-[150%]">Any day offers</h1>
                    <h2 class="text-text2 lg:text-[100%] text-[60%]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus consequuntur
                    </h2>
                    <h1 class="text-color2 text-4xl flex mb-0 text-[180%]">
                        -15.00 Kip
                    </h1>
                </div>
                <img src="/images/burger3.png" alt="..." class=" bg-yellow-200 rounded-full rotate-[-15deg] w-[40%]">
            </div>
            <div
                class="lg:w-[40%] lg:h-[90%] w-[90%] h-[40%] hover:scale-110 transition rounded-2xl shadow-md bg-[#fff] px-7 flex items-center justify-between">
                <div class="">
                    <h1 class=" text-color1 text-[150%]">Find a Dev shop near you</h1>
                    <h2 class="text-text2 lg:text-[100%] text-[60%]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus consequuntur
                    </h2>
                </div>
                <img src="/images/localtion.png" alt="..."
                    class=" bg-yellow-200 rounded-full rotate-[-15deg] w-[40%] p-[10px]">
            </div>
        </div>
        <div
            class="w-[100%] state bg-color4 my-[2%] lg:h-[40%] h-[60%] flex lg:flex-row flex-col justify-around items-center relative">
            <img src="/images/burger.png" alt="" class="rotate-[-15deg] lg:w-[20%] ">
            <div class=" gap-3 flex flex-col lg:w-[50%] w-[90%]">
                <h1 class="text-2xl ">" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem inventore
                    corrupti nulla asperiores rem temporibus dignissimos maxime. Ipsam similique rerum, molestias "</h1>
                <h1 class=" text-color2 text-2xl mb-0">James Rodrigo</h1>
                <h1 class="text-text2">Customir</h1>
            </div>

        </div>

        <div class="w-full state flex justify-center flex-col items-center">
            <h1 class=" text-color2 text-5xl text-center">Our Team</h1>
            <div class="flex lg:flex-row items-center gap-5 flex-col lg:w-[70%] w-full justify-around">
                <a-card hoverable style="width: 240px">
                    <img src="/images/Logo.png" alt="">
                    <a-card-meta title="Mr Phetsamay">
                    </a-card-meta>
                    <h1 class="text-text2 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                        voluptates</h1>
                    <div class="w-full flex justify-evenly">
                        <i class="fab fa-whatsapp text-3xl text-text1"></i>
                        <i class="fab fa-facebook text-3xl text-text1"></i>
                    </div>
                </a-card>
                <a-card hoverable style="width: 240px">
                    <img src="/images/Logo.png" alt="">
                    <a-card-meta title="Mr Phetsamay">
                    </a-card-meta>
                    <h1 class="text-text2 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                        voluptates</h1>
                    <div class="w-full flex justify-evenly">
                        <i class="fab fa-whatsapp text-3xl text-text1"></i>
                        <i class="fab fa-facebook text-3xl text-text1"></i>
                    </div>
                </a-card>
                <a-card hoverable style="width: 240px">
                    <img src="/images/Logo.png" alt="">
                    <a-card-meta title="Mr Phetsamay">
                    </a-card-meta>
                    <h1 class="text-text2 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                        voluptates</h1>
                    <div class="w-full flex justify-evenly">
                        <i class="fab fa-whatsapp text-3xl text-text1"></i>
                        <i class="fab fa-facebook text-3xl text-text1"></i>
                    </div>
                </a-card>
            </div>
            <h1 class="text-text1 my-5 text-4xl">We've Got Answers</h1>
            <a-collapse v-model:activeKey="activeKey" accordion class="bg-[#fff]  collapse1 w-[70%]">
                <a-collapse-panel key="1" header="This is panel header 1">
                    <p>{{ text }}</p>
                </a-collapse-panel>
                <a-collapse-panel key="2" header="This is panel header 2">
                    <p>{{ text }}</p>
                </a-collapse-panel>
                <a-collapse-panel key="3" header="This is panel header 3">
                    <p>{{ text }}</p>
                </a-collapse-panel>
            </a-collapse>
        </div>

        <div
            class="w-[100%] state bg-color4 my-[2%] py-5 lg:h-[40%] h-[60%] flex lg:flex-row flex-col justify-around items-center relative">
            <img src="/images/Logo.png" alt="" class=" rounded-full rotate-[-15deg] bg-[#fff]">
            <div class=" gap-3 flex flex-col lg:w-[40%] w-[90%]">
                <h1 class="text-3xl ">Contact Us</h1>
                <a-input placeholder="Email" />
                <a-textarea placeholder="commad" :rows="4" />
                <button class=" bg-color2 rounded-full py-3 text-2xl">Summit</button>
            </div>
        </div>
        <h1 class=" text-color2 text-5xl text-center">Our Recents Posts</h1>
        <div class="flex state lg:flex-row items-center gap-5 flex-col lg:w-[70%] w-full justify-around">
            <a-card hoverable style="width: 240px">
                <img src="/images/shop.jpeg" alt="" class="aspect-[1/1] w-[100%]">
                <a-card-meta title="Jan 2,2023">
                </a-card-meta>
                <h1 class="text-text2 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                    voluptates</h1>
            </a-card>
            <a-card hoverable style="width: 240px">
                <img src="/images/shop.jpeg" alt="" class="aspect-[1/1] w-[100%]">
                <a-card-meta title="Jan 2,2023">
                </a-card-meta>
                <h1 class="text-text2 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                    voluptates</h1>
            </a-card>
            <a-card hoverable style="width: 240px">
                <img src="/images/shop.jpeg" alt="" class="aspect-[1/1] w-[100%]">
                <a-card-meta title="Jan 2,2023">
                </a-card-meta>
                <h1 class="text-text2 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                    voluptates</h1>
            </a-card>
        </div>
    </section>
    <footer class=" state w-full flex flex-col mt-5">
        <div class="flex lg:flex-row flex-col bg-color2 w-full justify-around items-center py-2">
            <div class="flex lg:flex-row justify-center flex-col items-center gap-3">
                <img src="/images/Logo.png" alt="logo..." style="height: 50px;background: #fff;border-radius: 100%;" />
                <h1 class=" text-2xl mb-0">{{ $t('message.company-name') }}</h1>
                <div class="flex items-center">
                    <i class="fab fa-whatsapp text-3xl"></i>
                    <h1 class="mb-0 ml-2">020 78 682 693</h1>
                </div>
                <div class="flex items-center">
                    <i class="fas fa-shop text-3xl"></i>
                    <h1 class="mb-0 ml-2">020 78 682 693</h1>
                </div>
            </div>
            <div class="w-[50%] lg:mt-0 mt-2 lg:w-[20%] flex justify-evenly">
                <i class="fab fa-twitter text-3xl"></i>
                <i class="fab fa-facebook text-3xl"></i>
                <i class="fab fa-youtube text-3xl"></i>
                <i class="fab fa-instagram text-3xl"></i>
            </div>
        </div>
        <div class=" w-full bg-color5 flex justify-center items-center flex-col py-5">
            <div class=" flex lg:flex-row flex-col items-center w-full justify-evenly">
                <div class="flex flex-col gap-3">
                    <p class="text-gray-300 max-w-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
                        consequuntur voluptatem quo explicabo incidunt culpa aliquam? Reiciendis
                        placeat consequatur magni.
                    </p>
                </div>
                <div class="flex flex-col">
                    <h2 class="text-lg text-white mb-2">Site Map</h2>
                    <ul>
                        <li><a href="#" class="text-gray-300 hover:text-white">Home</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white">Menu</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white">About Us</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white">Contact Us</a></li>
                    </ul>
                </div>
            </div>
            <p class="flex text-white lg:flex-row flex-col justify-center items-center lg:gap-4">
                © 2024 {{ $t('message.company-name') }}. All rights reserved.
                <a href="#" class="text-gray-300 hover:text-white">Privacy Policy</a>
                <a href="#" class="text-gray-300 hover:text-white">Terms of Service</a>
            </p>
        </div>

    </footer>
</template>

<script setup lang="ts">
import headerComponent from '../../../../components/form/headerComponent.vue';
import { onMounted } from 'vue';
import ScrollReveal from 'scrollreveal';
import stats from '../components/stats.vue';
import { ref } from 'vue';

const activeKey = ref([]);
const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;


onMounted(() => {
    const sr = ScrollReveal({
        distance: '50px',
        duration: 1000,
        easing: 'ease-in-out',
        opacity: 0,
        interval: 200
    });
    sr.reveal('.text-hero', { origin: 'left' });
    sr.reveal('.image-hero', { origin: 'right' });
    sr.reveal('.state', { origin: 'bottom' });
});
</script>

<style scoped>
.open {
    color: green;
}

.close {
    color: red;
}

.collapse1 * {
    color: #212121;
    font-family: 'Madimi One';
}
</style>
