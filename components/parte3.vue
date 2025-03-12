<template>
  <div>
    <div class="background">
      <br />
      <div class="container">
        <div class="row">
          <h2 v-scrolls>NUESTRA CASA</h2>
        </div>
      </div>
      <br />
      <div class="slider" v-scrolls>
        <div class="slider-track">
          <img
            v-for="(img, index) in images"
            :key="index"
            :src="img.desktop"
            :srcset="`${img.mobile} 500w, ${img.desktop} 1000w`"
            class="slider-item"
          />
        </div>
      </div>
      <br />
    </div>
  </div>
</template>

<script setup>
const images = [
  {
    desktop: "/parte3/webp/1.webp",
    mobile: "/parte3/webp/1-cel.webp",
  },
  {
    desktop: "/parte3/webp/2.webp",
    mobile: "/parte3/webp/2-cel.webp",
  },
  {
    desktop: "/parte3/webp/3.webp",
    mobile: "/parte3/webp/3-cel.webp",
  },
  {
    desktop: "/parte3/webp/4.webp",
    mobile: "/parte3/webp/4-cel.webp",
  },
  {
    desktop: "/parte3/webp/5.webp",
    mobile: "/parte3/webp/5-cel.webp",
  },
  {
    desktop: "/parte3/webp/6.webp",
    mobile: "/parte3/webp/6-cel.webp",
  },
  {
    desktop: "/parte3/webp/1.webp",
    mobile: "/parte3/webp/1-cel.webp",
  },
  {
    desktop: "/parte3/webp/2.webp",
    mobile: "/parte3/webp/2-cel.webp",
  },
  {
    desktop: "/parte3/webp/3.webp",
    mobile: "/parte3/webp/3-cel.webp",
  },
  {
    desktop: "/parte3/webp/4.webp",
    mobile: "/parte3/webp/4-cel.webp",
  },
  {
    desktop: "/parte3/webp/5.webp",
    mobile: "/parte3/webp/5-cel.webp",
  },
  {
    desktop: "/parte3/webp/6.webp",
    mobile: "/parte3/webp/6-cel.webp",
  },
  {
    desktop: "/parte3/webp/1.webp",
    mobile: "/parte3/webp/1-cel.webp",
  },
  {
    desktop: "/parte3/webp/2.webp",
    mobile: "/parte3/webp/2-cel.webp",
  },
  {
    desktop: "/parte3/webp/3.webp",
    mobile: "/parte3/webp/3-cel.webp",
  },
  {
    desktop: "/parte3/webp/4.webp",
    mobile: "/parte3/webp/4-cel.webp",
  },
  {
    desktop: "/parte3/webp/5.webp",
    mobile: "/parte3/webp/5-cel.webp",
  },
  {
    desktop: "/parte3/webp/6.webp",
    mobile: "/parte3/webp/6-cel.webp",
  }
];
</script>


<style scoped>
@media screen and (max-width: 499px) {
  h2 {
    font-size: 30px;
  }
}
@media screen and (min-width: 500px) and (max-width: 720px) {

  h2 {
    font-size: 30px;
  }
}
@media screen and (min-width: 721px) and (max-width: 960px) {
  h2 {
    font-size: 30px;
  }
}
@media screen and (min-width: 961px) and (max-width: 1140px) {
  h2 {
    font-size: 32px;
  }
}
@media screen and (min-width: 1141px) {
  h2 {
    font-size: 36px;
  }
}

.background {
  background: linear-gradient(rgba(22, 95, 120, 1), rgba(22, 95, 120, 1))
}

.slider {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
}

.slider-track {
  display: flex;
  width: calc((370px * 6) + (24px * 12));
  animation: scroll 60s linear infinite;
}

.slider-item {
  width: 370px;
  height: 370px;
  margin-right: 25px;
  object-fit: cover;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

h2 {
  text-align: center;
  width: 100%;
  color: white;
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
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc((-370px - 25px) * 12));
  }
}
</style>
