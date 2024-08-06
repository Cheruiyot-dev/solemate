<template>
  <div>
    <header>
      <Navbar />
    </header>
  </div>
  <main class="flex-grow">
    <div class="container mx-auto px-4 py-8">
      <slot></slot>
    </div>
  </main>
  <Footer/>
</template>

<script setup>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue"
</script>
