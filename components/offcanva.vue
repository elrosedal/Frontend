<template>
  <div class="menu-container">
    <button
      @click="toggleSidebar"
      class="button-navigation"
      title="Menú de inicio"
    >
      <img
        src="/menu.ico"
        class="menu"
        alt="Menú"
        loading="lazy"
        :class="{ 'menu-invertir': route.path !== '/' || showBackground }"
      />
    </button>
    <div
      class="offcanvas-overlay"
      :class="{ active: showSidebar }"
      @click="closeSidebar"
    ></div>
    <transition name="sidebar">
      <div class="offcanvas" :class="{ active: showSidebar }">
        <button class="close-button" @click="closeSidebar">&times;</button>
        <div class="menu-content">
          <div
            v-for="(item, index) in menuItems"
            :key="index"
            :ref="item.anchor"
            class="menu-item"
            @click="closeSidebar(item.anchor)"
          >
            {{ item.text }}
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.menu-container {
  position: relative;
}

.button-navigation {
  border: none;
  cursor: pointer;
  background-color: transparent;
}

.menu {
  width: 100%;
  max-height: 37px;
  object-fit: contain;
  transition: opacity 0.3s;
}

.offcanvas-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out;
}

.offcanvas-overlay.active {
  opacity: 1;
  visibility: visible;
}

.offcanvas {
  position: fixed;
  top: 0;
  left: -250px;
  width: 250px;
  height: 100%;
  cursor: auto;
  background-color: #fff;
  transition: transform 0.3s ease-in-out;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
}

.offcanvas.active {
  transform: translateX(250px);
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
}

.menu-content {
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.menu-item {
  padding: 10px;
  cursor: pointer;
  transition: background 0.3s;
  color: black;
}

.menu-item:hover {
  background-color: rgb(199, 199, 199);
}

.menu-invertir {
  filter: invert(100%);
}

.sidebar-enter-active,
.sidebar-leave-active {
  transition: transform 0.3s ease-in-out;
}

.sidebar-enter,
.sidebar-leave-to {
  transform: translateX(-250px);
}
</style>

<script>
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted, onUnmounted } from "vue";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const showSidebar = ref(false);
    const showBackground = ref(false);

    const menuItems = [
      { text: "Inicio", anchor: "#parte1" },
      { text: "Nosotros", anchor: "#parte2" },
      { text: "Sede", anchor: "#parte3" },
      { text: "Contáctanos", anchor: "#parte4" },
    ];

    const toggleSidebar = () => {
      showSidebar.value = !showSidebar.value;
      document.body.style.overflow = showSidebar.value ? "hidden" : "";
    };

    const closeSidebar = async (anchor = null) => {
      showSidebar.value = false;
      document.body.style.overflow = "";

      if (typeof anchor === "string" && anchor.startsWith("#")) {
        // Si NO estamos en "/", primero navega a "/"
        if (route.path !== "/") {
          await router.push("/");
          setTimeout(() => scrollToElement(anchor), 500); // Espera antes de hacer scroll
        } else {
          scrollToElement(anchor); // Scroll inmediato si ya estamos en "/"
        }
      }
    };

    const scrollToElement = (selector) => {
      const targetElement = document.querySelector(selector);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 75,
          behavior: "smooth",
        });
      }
    };

    const handleScroll = () => {
      showBackground.value = window.scrollY > 20;
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);

      const handleResize = () => {
        if (window.innerWidth >= 780 && showSidebar.value) {
          closeSidebar();
        }
      };
      window.addEventListener("resize", handleResize);

      onUnmounted(() => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      });
    });

    return {
      route,
      router,
      showSidebar,
      showBackground,
      menuItems,
      toggleSidebar,
      closeSidebar,
    };
  },
};
</script>
