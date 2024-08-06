import { defineStore } from 'pinia'

import { ref } from 'vue'
import { useRouter } from 'vue-router';

interface User {
    username: string;
    role: string;
  }


  interface UserCredentials {
    username: string;
    password: string;
    role: string;
  }
export const useAuthStore = defineStore("auth", () => {
const error = ref(false);
const message = ref("");
const user = ref<User>({username: "", role: ""});
const router = useRouter();


// Simulate db
const UserCredentials: UserCredentials[] = [
   { username: "admin", password: "admin123", role: "admin" },
    { username: "user", password: "user123", role: "user" }
];

function saveToLocalStorage () {
    localStorage.setItem('auth', JSON.stringify({
        user: user.value
    }))
}

function getFromLocalStorage () {
    const storedAuth =  localStorage.getItem('auth')
    if(storedAuth) {
        const parsedAuth = JSON.parse(storedAuth)
        user.value = parsedAuth.user
    }
   
}

function login(given_username: string, password: string) {
    const foundUser = UserCredentials.find(u => u.username === given_username && u.password === password)
    if (foundUser) {
      user.value = { username: foundUser.username, role: foundUser.role }
      saveToLocalStorage()
      router.push("/home")
    } else {
      error.value = true
      message.value = "Invalid credentials"
    }
  }

  function register(given_username: string, password: string, confirmPassword: string) {
    if (password !== confirmPassword) {
      error.value = true
      message.value = "Passwords do not match"
      return
    }
    if (UserCredentials.some(u => u.username === given_username)) {
      error.value = true
      message.value = "Username already exists"
      return
    }
    UserCredentials.push({ username: given_username, password, role: "user" })
    user.value = { username: given_username, role: "user" }
    saveToLocalStorage()
    router.push("/home")
  }

  function logout() {
    user.value = { username: "", role: "" }
    localStorage.removeItem('auth')
    router.push("/login")
  }

  // Load data from localStorage on initialization
  getFromLocalStorage()

return {
    error,
    message,
    user,
    login,
    register,
    logout
  }
})