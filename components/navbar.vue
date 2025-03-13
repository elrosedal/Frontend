<template>
  <nav class="navbar" :class="{ navbar1: showBackground }">
    <div class="container">
      <div
        class="navbar-brand"
        @click="scrollTo('#parte1')"
        title="Página de inicio"
      >
        <img :src="(showBackground || route.path !== '/') ? '/logo/1.webp' : '/logo/2.webp'" class="logo" alt="Logo" loading="lazy" />
      </div>
      <ul class="navbar-nav">
        <li
          v-for="(item, index) in navItems"
          :key="index"
          class="nav-item link1"
        >
          <div
            class="nav-link"
            :class="{ 'nav-link1': showBackground, 'nav-link-active': route.path !== '/' }"
            @click="scrollTo(item.href)"
          >
            {{ item.label }}
          </div>
        </li>
        <li class="nav-item offcan">
          <div class="nav-link offcan">
            <LazyOffcanva />
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const showBackground = ref(false);
const route = useRoute();
const router = useRouter();

const navItems = [
  { label: "Inicio", href: "#parte1" },
  { label: "Nosotros", href: "#parte2" },
  { label: "Habitaciones", href: "#parte3" },
  { label: "Contáctanos", href: "#parte4" },
];

const handleScroll = () => {
  showBackground.value = window.scrollY > 20;
};

const scrollTo = async (selector) => {
  const offset = (selector === "#parte2" || selector === "#parte3") ? 80 : 0;

  // Si ya estamos en "/", hacemos scroll inmediatamente
  if (route.path === "/") {
    scrollToElement(selector, offset);
    return;
  }

  // Si estamos en otra ruta, primero navegamos a "/" y luego esperamos
  await router.push("/");

  setTimeout(() => {
    scrollToElement(selector, offset);
  }, 500); // Espera 500ms antes de hacer scroll
};

const scrollToElement = (selector, offset) => {
  const element = document.querySelector(selector);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
  }
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>


<style scoped>
@media screen and (min-width: 780px) {
  .nav-item.offcan {
    display: none;
  }
}
@media screen and (max-width: 781px) {
  .nav-item.link1 {
    display: none;
  }
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 12px 0;
  background-color: transparent;
  z-index: 4;
  transition: background-color 0.3s;
}

.navbar1 {
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 50px;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
}

.navbar-nav {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
  min-height: 35px;
}

.nav-item {
  margin-right: 15px;
  display: flex;
  align-items: center;
}

.nav-link {
  font-size: 20px;
  opacity: 0.7;
  color: white;
  text-decoration: none;
  transition: opacity 0.3s;
  cursor: pointer;
}

.nav-link-active {
  color: black !important;
}

.nav-link1 {
  color: black !important;
}

.nav-link:hover {
  opacity: 1;
}
</style>