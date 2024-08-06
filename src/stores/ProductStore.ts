import { defineStore } from "pinia";
import { ref } from "vue";

interface Product {
  _id: string;
  name: string;
  img: string;
  brand: string;
  gender: string;
  price: number;
  type: string;
}

export const useProductStore = defineStore("product", () => {
  const products = ref<Product[]>([]);
  const loading = ref(false);
  const productsOnCart = ref<Product[]>([]);
  const selectedBrand = ref("All");
  const selectedGender = ref("All");
  const selectedPrice = ref("All");
  const selectedType = ref("All");

  async function getProducts() {
    loading.value = true;
    try {
      new Promise((resolve) => setTimeout(resolve, 1000));

      products.value = [
        {
          _id: "1",
          name: "Fila",
          img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80",
          brand: "Brand A",
          gender: "Unisex",
          price: 50,
          type: "Shirt",
        },
        {
          _id: "2",
          name: "Reebook",
          img: "https://media.istockphoto.com/id/1337191336/photo/black-fashion-sport-shoe-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=DAsn_Qj_gjJ42BDr33CU10QO3ckCMD93KFyuP7qrvN8=",
          brand: "Brand B",
          gender: "Men",
          price: 75,
          type: "Pants",
        },
        {
          _id: "3",
          name: "Nike",
          img: "https://media.istockphoto.com/id/1320501530/photo/white-sneaker-on-a-blue-gradient-background-mens-fashion-sport-shoe-sneakers-lifestyle.jpg?b=1&s=170667a&w=0&k=20&c=-iiKNaFkLHe1WClYWJa7d7wR85HEhEpA2tsRYknnX4E=",
          brand: "Brand C",
          gender: "Women",
          price: 60,
          type: "Dress",
        },
      ];
    } finally {
      loading.value = false;
    }
  }

  // add to cart

  async function addToCart(id: string) {
    // get product by id
    // check if product exists
    // Add to cart: => productsOnCart[]
    const product = products.value.find((item) => item._id === id);
    if (product && !productsOnCart.value.includes(product)) {
      productsOnCart.value.push(product);
    }
  }

  function clearCart() {
    productsOnCart.value = [];
  }
  return {
    products,
    loading,
    productsOnCart,
    selectedBrand,
    selectedGender,
    selectedPrice,
    selectedType,
    getProducts,
    addToCart,
    clearCart,
  };
});
