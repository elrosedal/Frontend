<template>
  <div class="background">
    <div class="container">
      <div class="columns">
        <div>
          <p><a @click="navigateWithOffset('#parte2')" class="link">NOSOTROS</a></p>
          <p><a @click="navigateWithOffset('#parte3')" class="link">SEDE</a></p>
          <p><a @click="navigateWithOffset('#parte4')" class="link">CONTÁCTANOS</a></p>
          <p>
            <NuxtLink to="/libro-de-reclamacion" class="link"
              >LIBRO DE RECLAMACIÓN</NuxtLink
            >
          </p>
        </div>

        <div class="links-total">
          <div class="social-links">
            <a
              href="https://www.facebook.com/people/Residencia-Geriatrica-El-Rosedal/100070810635180/"
            >
              <img
                src="/webp/facebook.webp"
                class="imagen"
                alt="Facebook"
                loading="lazy"
              />
            </a>
            <a
              href="https://www.instagram.com/residenciageriatricarosedal?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            >
              <img
                src="/webp/instagram.webp"
                class="imagen"
                alt="Instagram"
                loading="lazy"
              />
            </a>
          </div>
          <div class="social-links">
            <a href="https://www.youtube.com/@El-Rosedal-Tenicela">
              <img
                src="/webp/youtube1.webp"
                class="imagen"
                alt="YouTube"
                loading="lazy"
              />
            </a>
            <a
              href="https://www.tiktok.com/@residenciageriatr6?is_from_webapp=1&sender_device=pc"
            >
              <img
                src="/webp/tiktok.webp"
                class="imagen"
                alt="TikTok"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 359px) {
  .social-links {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  .columns {
    text-align: center;
  }
}

@media screen and (min-width: 360px) {
  .links-total {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
  }
  .social-links {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: flex-end;
  }
  .columns {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
}

h2 {
  margin-top: 0;
}

h2,
p {
  color: white;
}

.link {
  text-decoration: none;
  color: rgb(212, 212, 212);
  transition: color 0.3s ease-in-out;
  cursor: pointer;
}

.link:hover {
  color: white;
}

.background {
  background-color: black;
  padding: 20px 0;
}

.imagen {
  max-width: 45px;
  object-fit: contain;
  opacity: 0.8;
  transition: opacity 0.3s ease-in-out;
}
.imagen:hover {
  opacity: 1;
}
</style>

<script setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const navigateWithOffset = async (selector) => {
  const offset = 80; // Offset de 80px

  // Si ya estamos en "/", hacemos el scroll inmediatamente
  if (route.path === "/") {
    scrollToElement(selector, offset);
    return;
  }

  // Si no estamos en "/", navegamos y esperamos antes de hacer el scroll
  await router.push("/");

  setTimeout(() => {
    scrollToElement(selector, offset);
  }, 500); // Esperamos medio segundo para asegurarnos de que la página cargó
};

// Función para hacer scroll con offset
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
</script>
