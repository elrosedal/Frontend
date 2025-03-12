<template>
  <div style="position: relative">
    <br />
    <div class="container">
      <div class="row">
        <div class="col-6 order1" v-scrolls>
          <br class="desaparecer" />
          <picture>
            <source 
              srcset="/parte2/webp/3.webp" 
              media="(min-width: 500px)" 
            />
            <img 
              src="/parte2/webp/3-cel.webp" 
              class="imagen min"
              alt="Terraza de colores blancos con varios muebles, sillas y plantas"
              loading="lazy"
            />
          </picture>
          <br />
          <br />
          <div class="columns">
            <picture>
              <source
                srcset="/parte2/webp/1.webp"
                media="(min-width: 500px)"
              />
              <img
                src="/parte2/webp/1-cel.webp"
                class="imagen"
                alt="dormitorio minimalista de colores neutros"
                loading="lazy"
              />
            </picture>
            <picture>
              <source
                srcset="/parte2/webp/2.webp"
                media="(min-width: 500px)"
              />
              <img
                src="/parte2/webp/2-cel.webp"
                class="imagen"
                alt="cocina moderno de colores oscuros"
                loading="lazy"
              />
            </picture>
          </div>
        </div>
        <div class="texto col-6 order" v-scrolls>
          <div class="texto2">
            <h2>NUESTRO HISTORIA</h2>
            <p align="justify">
              El Rosedal fue fundado el 5 de diciembre de 1975 por la licenciada Hilmer Rosa tenicela Collazos y Antonio tenicela Collazos. 
              Nosotros brindamos un hogar cálido y seguro para adultos mayores, donde el bienestar, el respeto y la calidad de vida son nuestra 
              prioridad. Contamos con un equipo de profesionales dedicados que ofrecen atención integral, brindar asistencia médica y actividades 
              diseñadas para mantenerlos activos.
            </p>
            <a href="https://api.whatsapp.com/send?phone=51934116882&text=Hola%20quisiera%20m%C3%A1s%20informaci%C3%B3n">
              <button class="btn">Contactanos</button>
            </a>
          </div>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<style scoped>
@media screen and (max-width: 499px) {
  .order {
    order: 1;
  }
  .order1 {
    order: 2;
  }
  h2 {
    font-size: 28px;
  }
  p {
    font-size: 18px;
  }
  .texto2 {
    text-align: center;
  }
  .col-6 {
    width: 98%;
    padding-left: 1%;
    padding-right: 1%;
  }
  .btn {
    height: 35px;
    width: 220px;
    font-size: 15px;
  }
}
@media screen and (min-width: 500px) {
  .btn {
    height: 40px;
    width: 240px;
    font-size: 18px;
  }
}
@media screen and (min-width: 500px) and (max-width: 720px) {
  .order {
    order: 1;
  }
  .order1 {
    order: 2;
  }
  h2 {
    font-size: 30px;
  }
  p {
    font-size: 19px;
  }
  .col-6 {
    width: 98%;
    padding-left: 1%;
    padding-right: 1%;
  }
  .texto2 {
    text-align: center;
  }
}
@media screen and (min-width: 721px) and (max-width: 960px) {
  h2 {
    font-size: 25px;
  }
  p {
    font-size: 17px;
  }
  .col-6 {
    width: 48%;
    padding-left: 1%;
    padding-right: 1%;
  }
  .desaparecer {
    display: none;
  }
}
@media screen and (min-width: 961px) and (max-width: 1140px) {
  h2 {
    font-size: 30px;
  }
  p {
    font-size: 17px;
  }
  .col-6 {
    width: 48%;
    padding-left: 1%;
    padding-right: 1%;
  }
  .desaparecer {
    display: none;
  }
}
@media screen and (min-width: 1060px) {
  .imagen {
    min-height: 250px;
  }
  .min {
    object-position: 50% 40%; 
  }
}
@media screen and (min-width: 1141px) {
  h2 {
    font-size: 33px;
  }
  p {
    font-size: 19px;
  }
  .col-6 {
    width: 48%;
    padding-left: 1%;
    padding-right: 1%;
  }
  .desaparecer {
    display: none;
  }


}
.columns {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 10px;
}
.texto {
  display: flex;
  align-items: center;
}
h2 {
  margin: 0;
  color: #973220;
}
.imagen {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.btn {
  background-color: #973220;
  border: none;
  border-radius: 4px; /* Más suave */
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, font-weight 0.3s ease;
  color: white;
  font-size: 16px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
  outline: none;
}

.btn:hover {
  transform: scale(1.1);
  font-weight: 700;
  box-shadow: 4px 8px 15px rgba(0, 0, 0, 0.3);
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
