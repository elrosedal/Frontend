<template>
  <div class="container">
    <h1>Libro de Reclamaciones</h1>
    <form @submit.prevent="submitForm" v-if="!submitted">
      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" v-model.trim="form.nombre" required />
      </div>

      <div class="form-group">
        <label for="dni">DNI:</label>
        <input
          type="text"
          id="dni"
          v-model.trim="form.dni"
          required
          pattern="\d{8}"
        />
      </div>

      <div class="form-group">
        <label for="telefono">Teléfono:</label>
        <input
          type="text"
          id="telefono"
          v-model.trim="form.telefono"
          required
        />
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model.trim="form.email" required />
      </div>

      <div class="form-group">
        <label for="direccion">Dirección:</label>
        <input
          type="text"
          id="direccion"
          v-model.trim="form.direccion"
          required
        />
      </div>

      <div class="form-group">
        <label for="tipoReclamo">Tipo de Reclamo:</label>
        <select id="tipoReclamo" v-model="form.tipoReclamo">
          <option value="Queja">Queja</option>
          <option value="Reclamo">Reclamo</option>
          <option value="Consulta">Consulta</option>
        </select>
      </div>

      <div class="form-group">
        <label for="descripcion">Descripción:</label>
        <textarea
          id="descripcion"
          v-model.trim="form.descripcion"
          required
        ></textarea>
      </div>

      <button type="submit" :disabled="isButtonDisabled">Enviar</button>
    </form>

    <div v-if="submitted">
      <p>Formulario enviado con éxito.</p>
    </div>

    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      initialForm: {
        nombre: "",
        dni: "",
        telefono: "",
        email: "",
        direccion: "",
        tipoReclamo: "Queja",
        descripcion: "",
      },
      form: {},
      submitted: false,
      errorMessage: "",
    };
  },
  computed: {
    isButtonDisabled() {
      return Object.values(this.form).some((value) => value.trim() === "");
    },
  },
  created() {
    this.form = { ...this.initialForm };
  },
  methods: {
    async submitForm() {
      this.errorMessage = "";
      try {
        const result = await axios.post(
          "https://backend-nine-green-90.vercel.app/reclamo",
          this.form
        );
        if (result.data.success) {
          this.submitted = true;
          this.form = { ...this.initialForm };
        }
      } catch (error) {
        console.error("Error al enviar el formulario:", error);
        this.errorMessage =
          "Ocurrió un error al enviar el formulario. Inténtalo nuevamente.";
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  padding-top: 80px;
}

h1 {
  margin-bottom: 20px;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

input,
select,
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s ease;
  box-sizing: border-box;
}

input:focus,
select:focus,
textarea:focus {
  border-color: #973220;
  outline: none;
}

button {
  padding: 10px;
  background-color: #973220;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 
    transform 0.3s ease, 
    box-shadow 0.3s ease, 
    background-color 0.3s ease, 
    opacity 0.3s ease;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
}

button:hover {
  transform: scale(1.05);
  box-shadow: 4px 8px 15px rgba(0, 0, 0, 0.3);
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
  box-shadow: none;
  transform: none;
  opacity: 0.6;
}


.error-message {
  color: red;
  margin-top: 10px;
}
</style>
