<template>
    <div>
        <header class="lg:py-3 bg-color1 w-[100% ]">
            <div class="container mx-auto lg:relative flex flex-row justify-between px-5 items-center">
                <div class="flex justify-center items-center gap-3">
                    <img src="/images/Logo.png" alt="logo..." style="height: 50px;background: #fff;border-radius: 100%;" />
                    <h1 class=" text-2xl mb-0">{{ $t('message.company-name') }}</h1>

                </div>

                <nav class="w-[50%] hidden lg:flex">
                    <ul class="flex w-[100%] h-full justify-between items-center mb-0">
                        <li class="duration-300 hover:scale-125">
                            <a href="#">
                                {{ $t('message.Home') }}
                            </a>
                        </li>

                        <li class="duration-300 hover:scale-125">
                            <a href="">
                                {{ $t('message.Menu') }}
                            </a>
                        </li>
                        <li class="duration-300 hover:scale-125">
                            <a href="">
                                {{ $t('message.AboutUs') }}
                            </a>
                        </li>
                        <li class="duration-300 hover:scale-125">
                            <a href="">
                                {{ $t('message.ContactUs') }}
                            </a>
                        </li>
                        <li class="flex justify-center items-center">
                            <h2 class="mb-0 mr-3">{{ $t('message.language') }}</h2>
                            <a-switch v-model:checked="state" checked-children="La" un-checked-children="En" style="background: #C80036;"
                                @change="setLocale(state)" />
                        </li>
                    </ul>
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

            </div>
        </header>

    </div>
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

<style scoped></style>