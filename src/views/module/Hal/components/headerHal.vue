<template>
    <header class="flex fixed w-[100%] bg-[rgba(255,255,255,0.5)] justify-between px-10 items-center py-3">
        <div class="flex items-center gap-3">
            <img src="/images/HalLogo.png" alt="" width="70">
            <div class="flex flex-col">
                <h1 class=" text-text1 text-4xl mb-0 font-[900]" style="background: transparent;">Hal</h1>
                <h1 class=" text-text2 text-2xl mb-0" style="background: transparent;">GROUP HOLDINGS</h1>
            </div>
        </div>
        <nav class=" hidden lg:flex justify-around items-center w-[40%] border py-3 rounded-full border-text2">
            <a href="" class=" text-text2">About Us</a>
            <a href="" class=" text-text2">Company</a>
            <a href="" class=" text-text2">News</a>
            <a href="" class=" text-text2">Contact Us</a>
        </nav>

        <nav class="lg:flex hidden justify-around px-2 items-center w-[20%] border py-3 rounded-full border-text2">
            <i class="fas fa-earth-asia" </i>
                <a href="" class=" text-text2">English</a>|
                <a href="" class=" text-text2">Lao</a>|
                <a href="" class=" text-text2">Chinese</a>
        </nav>
        <div class="lg:hidden">
            <a-button type="primary" @click="showDrawer"><i class="fas fa-bars"></i></a-button>
            <a-drawer v-model:open="open" class="custom-class" root-class-name="root-class-name" width="60%"
                :root-style="{ color: 'blue' }" style="background: #C7253E;" title="Menu" placement="left"
                @after-open-change="afterOpenChange" :headerStyle="{ backgroundColor: '#821131' }"
                :bodyStyle="{ padding: '0' }">
                <ul class="flex w-[100%] justify-between mb-0 flex-col">
                    <li class="px-5 py-3 hover:bg-color6">
                        <a href="#">
                            <i class="fas fa-house-user mr-2"></i>
                            {{ $t('message.Home') }}
                        </a>
                    </li>
                    <li class="px-5 py-3 hover:bg-color6">
                        <a href="">
                            <i class="fas fa-utensils mr-2"></i>
                            {{ $t('message.Menu') }}
                        </a>
                    </li>
                    <li class="px-5 py-3 hover:bg-color6">
                        <a href="">
                            <i class="fas fa-address-card mr-2"></i>
                            {{ $t('message.AboutUs') }}
                        </a>
                    </li>
                    <li class="px-5 py-3 hover:bg-color6">
                        <a href="">
                            <i class="fas fa-phone mr-2"></i>
                            {{ $t('message.ContactUs') }}
                        </a>
                    </li>
                    <li class="px-5 py-3 flex">
                        <h2 class="mb-0 mr-3">{{ $t('message.language') }}</h2>
                        <a-switch v-model:checked="state" checked-children="La" un-checked-children="En"
                            @change="setLocale(state)" />
                    </li>
                </ul>
            </a-drawer>
        </div>
    </header>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
const open = ref<boolean>(false);
const state = ref<boolean>(localStorage.getItem('locale') === 'la');

const afterOpenChange = (bool: boolean) => {
    console.log('open', bool);
};

const showDrawer = () => {
    open.value = true;
};

const setLocale = (value: boolean) => {
    if (value) {
        localStorage.setItem('locale', 'la');
    } else {
        localStorage.setItem('locale', 'en');
    }
    window.location.reload();
};
</script>

<style scoped>
h1 {
    background: #ffffff56;
}
</style>