<script setup lang="ts">
import Carousel from "../components/Carousel.vue";
import { ref, onMounted , watch} from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute();

const images = ref<string[]>([])

const loadImages = () => {
  images.value = [
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80",
  "https://media.istockphoto.com/id/1337191336/photo/black-fashion-sport-shoe-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=DAsn_Qj_gjJ42BDr33CU10QO3ckCMD93KFyuP7qrvN8=",
  "https://media.istockphoto.com/id/1320501530/photo/white-sneaker-on-a-blue-gradient-background-mens-fashion-sport-shoe-sneakers-lifestyle.jpg?b=1&s=170667a&w=0&k=20&c=-iiKNaFkLHe1WClYWJa7d7wR85HEhEpA2tsRYknnX4E=",
];
}
onMounted(() => {
  loadImages();
 
})

// watch for route changes and reload images
watch(() => route.path, () => {
  loadImages();
})

</script>

<template>
 
  <Carousel :images="images.value"  :key="route.path"/>

  <section class="text-black py-20 bg-gray-100">
    <div class="container mx-auto px-2">
      <div class="flex justify-center items-center">
        <div class="flex flex-col justify-center items-center">
          <h1 class="text-4xl font-bold mb-6">Find your perfect shoes here</h1>
          <p class="text-lg mb-10">
            Discover our latest collection of shoes that combines comfort and
            style
          </p>
          <router-link
            to="/shop"
            class="bg-gray-900 text-gray-100 py-2 px-4 rounded-md font-bold text-lg hover:bg-gray-800"
            >Go to Shop</router-link
          >
        </div>
      </div>
    </div>
  </section>

  <!-- content section -->
  <section
    class="bg-gradient-to-br from-teal-400 to-blue-500 text-white py-16 lg:py-24"
  >
    <div class="container mx-auto px-4">
      <div class="flex flex-col lg:flex-row items-center justify-between">
        <div class="lg:w-1/2 mb-10 lg:mb-0">
          <h2 class="text-5xl font-bold mb-6 leading-tight">
            Step into
            <span class="relative">
              Comfort
              <svg
                class="absolute bottom-0 left-0 w-full"
                viewBox="0 0 200 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 15 Q100 0 200 15"
                  stroke="currentColor"
                  stroke-width="4"
                  fill="none"
                />
              </svg>
            </span>
            and
            <span class="relative">
              Style
              <svg
                class="absolute bottom-0 left-0 w-full"
                viewBox="0 0 200 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 15 Q100 0 200 15"
                  stroke="currentColor"
                  stroke-width="4"
                  fill="none"
                />
              </svg>
            </span>
          </h2>
          <p class="text-xl mb-8">
            At SoleMate, we believe that every step should be a statement. Our
            curated collection of footwear combines the latest trends with
            timeless comfort.
          </p>
          <p class="text-lg mb-8">
            From sleek sneakers to elegant dress shoes, we offer a diverse range
            to suit every occasion and personality.
          </p>
          <div class="bg-white/20 backdrop-blur-md rounded-lg p-6 shadow-xl">
            <p class="text-lg italic">
              Our team of passionate shoe enthusiasts scours the globe to bring
              you the best in quality and design. Whether you're looking for
              athletic performance or fashion-forward flair, we've got the
              perfect pair waiting for you.
            </p>
          </div>
        </div>
        <div class="lg:w-1/2 relative pl-16">
          <div
            v-for="image in images.value"
            :key="image"
            class="grid grid-cols-2 gap-2 p-4"
          >
            <img
              :src="image"
              class="rounded-lg shadow-2xl transform hover:scale-105 transition duration-300"
            />
          </div>
          <div
            class="absolute -bottom-10 -left-10 bg-yellow-400 rounded-full p-4 shadow-lg"
          >
            <svg
              class="w-10 h-10 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
