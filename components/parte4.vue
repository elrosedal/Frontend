<template>
  <div>
    <div
      class="alert-success"
      :class="{ 'alert-not-success': !alert, 'alert-success1': alert }"
    >
      Se envió correctamente
    </div>
    <br />
    <div class="container">
      <div class="row">
        <div class="col-6" v-scrolls>
          <h2>CONTÁCTANOS</h2>
          <p align="justify">
            Si tienes preguntas, sugerencias o necesitas asistencia, no dudes en
            escribirnos. Queremos asegurarnos de que tengas la mejor experiencia
            con nuestra plataforma. ¡Estamos a un mensaje de distancia!
          </p>
          <div>
            <div
              v-for="(item, index) in contactInfo"
              :key="index"
              class="contenedor2"
            >
              <img :src="item.icon" class="imagen1" />
              <div class="item-columna">
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6" v-scrolls>
          <div class="contact-form">
            <label for="name">Nombre</label>
            <input
              type="text"
              id="name"
              placeholder="Jose Luis"
              v-model="nombre"
              @input="validateForm"
            />
            <br />
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="joseluis3@gmail.com"
              v-model="correo"
              @input="validateForm"
            />
            <br />
            <label for="message">Mensaje</label>
            <textarea
              id="message"
              placeholder="Mensaje"
              v-model="texto"
              @input="validateForm"
            ></textarea>
            <br />
            <div class="center">
              <button class="btn" :disabled="isButtonDisabled" @click="form">
                ENVIAR
              </button>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
h2 {
  color: #973220;
}

.imagen1 {
  width: 40px;
  height: auto;
  object-fit: contain;
}

.contenedor2 {
  display: flex;
  gap: 15px;
}

.item-columna {
  display: flex;
  flex-direction: column;
  align-items: start;
}

.item-columna h3 {
  margin-bottom: 5px;
  padding: 0;
}

.item-columna p {
  margin-top: 0;
  padding: 0;
}

.contact-form {
  display: flex;
  flex-direction: column;
  align-items: start;
}

.btn {
  background-color: #973220;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, font-weight 0.3s ease,
    background-color 0.3s ease;
  color: white;
  font-size: 16px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
}

.btn:hover {
  transform: scale(1.1);
  font-weight: 700;
  box-shadow: 4px 8px 15px rgba(0, 0, 0, 0.3);
}

.btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
  box-shadow: none;
  transform: none;
  font-weight: normal;
}

label {
  font-weight: bold;
  padding-bottom: 5px;
}

input,
textarea {
  width: 100%;
  max-width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box;
}

textarea {
  height: 100px;
  resize: vertical;
}

.alert-success {
  top: 20px;
  right: 2%;
  background-color: #d4edda;
  border-color: #c3e6cb;
  color: #155724;
  padding: 15px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  position: fixed;
  max-width: 100%;
  transition: opacity 0.3s ease;
  font-family: Arial, Helvetica, sans-serif;
}

.alert-success1 {
  opacity: 1;
  z-index: 100;
}

.alert-not-success {
  z-index: -1;
  opacity: 0;
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

/* Media Queries optimizadas */
@media screen and (max-width: 499px) {
  h2 {
    font-size: 30px;
    text-align: center;
  }
  h3 {
    font-size: 19px;
  }
  p {
    font-size: 15px;
  }
  .col-6 {
    width: 98%;
    padding: 0 1%;
  }
  .btn {
    height: 35px;
    width: 220px;
    font-size: 15px;
  }
  .center {
    display: flex;
    justify-content: center;
    width: 100%;
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
  h2 {
    font-size: 34px;
    text-align: center;
  }
  h3 {
    font-size: 20px;
  }
  p {
    font-size: 17px;
  }
  .col-6 {
    width: 98%;
    padding: 0 1%;
  }
}

@media screen and (min-width: 721px) and (max-width: 960px) {
  h2 {
    font-size: 25px;
  }
  h3 {
    font-size: 19px;
  }
  p {
    font-size: 15px;
  }
  .col-6 {
    width: 48%;
    padding: 0 1%;
  }
}

@media screen and (min-width: 961px) and (max-width: 1140px) {
  h2 {
    font-size: 30px;
  }
  h3 {
    font-size: 19px;
  }
  p {
    font-size: 16px;
  }
  .col-6 {
    width: 48%;
    padding: 0 1%;
  }
}

@media screen and (min-width: 1141px) {
  h2 {
    font-size: 36px;
  }
  h3 {
    font-size: 21px;
  }
  p {
    font-size: 16px;
  }
  .col-6 {
    width: 48%;
    padding: 0 1%;
  }
}
</style>

<script setup>
import { ref, computed, watchEffect } from "vue";
import axios from "axios";

const nombre = ref("");
const correo = ref("");
const texto = ref("");
const alert = ref(false);
const isFormValid = ref(false);

const contactInfo = ref([
  {
    icon: "/webp/ubicacion.webp",
    title: "UBICACIÓN",
    description:
      "Avenida Mariscal Castilla N° 241 Manzana A Lote 000034, Urbanización El Doral, Santiago de Surco",
  },
  {
    icon: "/webp/telefono.webp",
    title: "TELÉFONO",
    description: "+51 946887200",
  },
  { icon: "/webp/email.webp", title: "EMAIL", description: "rgelrosedal241@gmail.com" },
]);

const validateForm = () => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  isFormValid.value =
    nombre.value !== "" &&
    emailPattern.test(correo.value) &&
    texto.value !== "";
};

const isButtonDisabled = computed(() => !isFormValid.value);

// Envío del formulario
const form = async () => {
  try {
    const result = await axios.post(
      "https://backend-nine-green-90.vercel.app/correo",
      {
        correo: correo.value,
        nombre: nombre.value,
        texto: texto.value,
      }
    );

    if (result.data.success) {
      alert.value = true;
      setTimeout(() => (alert.value = false), 5000);
      nombre.value = "";
      correo.value = "";
      texto.value = "";
    }
  } catch (error) {
    console.error("Error al enviar el formulario:", error);
  }
};

// Observar cambios en el estado de la alerta
watchEffect(() => {
  if (alert.value) {
    setTimeout(() => (alert.value = false), 5000);
  }
});
</script>