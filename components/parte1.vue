<template>
  <ClientOnly>
    <div style="position: relative; height: 100vh; z-index: 2" id="parte1">
      <swiper-container ref="containerRef" :init="false" class="swiper">
        <swiper-slide v-for="(bg, index) in backgrounds" :key="index" :class="bg"></swiper-slide>
      </swiper-container>
      <div class="container absolute" v-scrolls>
        <div class="absolute_dentro">
          <div class="container"></div>
          <div class="row texto2" style="pointer-events: none">
            <div>
              <h1>Cuidamos con amor a sus ser querido</h1>
              <p>
                 50 años brindado servicios de calidad al adulto mayor
              </p>
              <div class="width">
                <a href="https://api.whatsapp.com/send?phone=51934116882&text=Hola%20quisiera%20m%C3%A1s%20informaci%C3%B3n">
                  <button class="btn">CONTACTANOS</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
const containerRef = ref(null);
const backgrounds = ["background1", "background2", "background3"];
const swiper = useSwiper(containerRef, {
  effect: "creative",
  loop: true,
  autoplay: {
    delay: 3000,
  },
  creativeEffect: {
    prev: {
      shadow: false,
      translate: ["-20%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
});
</script>

<style scoped>
@media screen and (max-width: 499px) {
  .background1 {
    background: linear-gradient(rgba(83, 131, 90, 0.2), rgba(83, 131, 90, 0.2)),
      url("/parte1/webp/1-cel.webp");
  }

  .background2 {
    background: linear-gradient(rgba(83, 131, 90, 0.2), rgba(83, 131, 90, 0.2)),
      url("/parte1/webp/2-cel.webp");
  }

  .background3 {
    background: linear-gradient(rgba(83, 131, 90, 0.2), rgba(83, 131, 90, 0.2)),
      url("/parte1/webp/3-cel.webp");
  }

  p {
    font-size: clamp(18px, 1vw, 1.5vw);
    text-align: center;
  }

  .texto2 {
    justify-content: center;
  }

  .width {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .btn {
    height: 35px;
    width: 220px;
    font-size: 15px;
  }

  h1 {
    font-size: clamp(45px, 3vw, 4vw);
    text-align: center;
  }
}

@media screen and (min-width: 500px) {
  .background1 {
    background: linear-gradient(rgba(83, 131, 90, 0.2), rgba(83, 131, 90, 0.2)),
      url("/parte1/webp/1.webp");
  }

  .background2 {
    background: linear-gradient(rgba(83, 131, 90, 0.2), rgba(83, 131, 90, 0.2)),
      url("/parte1/webp/2.webp");
  }

  .background3 {
    background: linear-gradient(rgba(83, 131, 90, 0.2), rgba(83, 131, 90, 0.2)),
      url("/parte1/webp/3.webp");
  }

  .btn {
    height: 40px;
    width: 240px;
    font-size: 18px;
  }

  .btn:hover {
    margin-left: 23px;
  }

  h1 {
    font-size: clamp(60px, 5vw, 7vw);
  }

  p {
    font-size: clamp(20px, 1.5vw, 2vw);
  }
}

h1,
p,
button {
  pointer-events: auto;
}

.btn {
  background-color: #973220;
  color:white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease, margin 0.3s ease;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
}

.btn:hover {
  transform: scale(1.2);
  font-weight: 700;
  box-shadow: 4px 8px 15px rgba(0, 0, 0, 0.3);
}

.swiper {
  height: 100%;
  width: 100%;
  z-index: 1;
}

.background1,
.background2,
.background3 {
  background-size: cover;
  background-position: center center; 
  background-repeat: no-repeat;
  background-size: cover;
}

.absolute {
  position: absolute;
  z-index: 2;
  pointer-events: none;
  color: white;
  top: 0;
  height: 100vh;
}

.absolute_dentro {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.before-enter {
  opacity: 0;
  transform: translateX(100px);
  transition: all 1s ease-out;
}

.enter {
  opacity: 1;
  transform: translateX(0px);
}
</style>
