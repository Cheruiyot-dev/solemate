<template>
    <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:p-1 lg:py-0">
      
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form @submit.prevent="handleLogin" class="space-y-4 md:space-y-6" >
                <div v-if="errorMessage" class="text-red-500">{{ errorMessage }}</div>
                  <div>
                      <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                      <input type="text" name="username" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" v-model="username" required="">
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""  v-model="password">
                  </div>
                
                  <button type="submit" class="w-full text-gray bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <router-link to="register" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</router-link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
  </template>
  
  <script setup lang="ts">

import { ref } from 'vue';
import { useAuthStore } from '@/stores/AuthStore';

const store = useAuthStore()

let username = ref("")
let password = ref("")
let errorMessage = ref("")
let isLoading = ref(false)




const handleLogin = async () => {
  isLoading.value = true
  errorMessage.value = ""
  try {
    await store.login(username.value, password.value)
  } catch (error) {
    errorMessage.value = error.message || "Login failed"
  } finally {
    isLoading.value = false
  }
}
  </script>