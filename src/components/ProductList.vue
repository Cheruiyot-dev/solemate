<template>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-y-1 gap-x-1">
    <Product
      v-for="product in filteredProducts"
      :name="product.name"
      :key="product._id"
      :price="product.price"
      :img="product.img"
      :id="product._id"
    />
    <h1 v-show="filteredProducts.length === 0">There are no products in this category..</h1>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from "@/stores/ProductStore.ts";
import Product from "./Product.vue";
import { computed, onMounted } from "vue";
const store = useProductStore();


const loading = computed(() => store.loading);
onMounted(() => {
    store.getProducts();
})
console.log("store properties...", store);


const products = store.products;
const filteredProducts = computed(() => {
  let products = store.products;

  if (store.selectedBrand.value && store.selectedBrand.value !== "All") {
    products = products.filter(
      (product) => product.brand === store.selectedBrand.value
    );
  }

  if (store.selectedGender.value && store.selectedGender.value !== "All") {
    products = products.filter(
      (product) => product.gender === store.selectedGender.value
    );
  }

  if (store.selectedType.value && store.selectedType.value !== "All") {
    products = products.filter(
      (product) => product.type === store.selectedType.value
    );
  }

  if (store.selectedPrice.value && store.selectedPrice.value !== "All") {
    const priceRange = store.selectedPrice.value;
    switch (priceRange) {
      case "0-50":
        products = products.filter(
          (product) => product.price >= 0 && product.price <= 50
        );

        break;
      case "50-100":
        products = products.filter(
          (product) => product.price >= 50 && product.price <= 100
        );

        break;
      case "100-150":
        products = products.filter(
          (product) => product.price >= 100 && product.price <= 150
        );

        break;

      default:
        break;
    }
  }

  return products;
});
</script>
