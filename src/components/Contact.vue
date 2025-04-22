<template>
  <section class="bg-black w-full text-white px-6 sm:px-12 py-20" id="contact">
    <div class="container max-w-7xl mx-auto gap-2">
      <h2 class="text-yellow-300 text-4xl sm:text-5xl font-bold uppercase tracking-wide italic">
        Let`s Connect
      </h2>
      <!-- 🎨 Color accents -->
      <div class="flex mt-4 space-x-2 py-4 px-0">
        <img
          src="@/assets/images/separador1.svg"
          alt="separador"
          class="h-4 sm:h-8 md:h-8 w-auto"
        />
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto py-20">
      <!-- Email -->
      <div class="flex flex-col space-y-4 py-4">
        <img
          src="@/assets/images/contactIcon1.svg"
          alt="Email Icon"
          class="w-70 h-70 object-contain"
        />
        <div class="w-10 border-b-4 border-white text-left"></div>
        <h3 class="text-yellow-300 font-semibold italic uppercase text-lg py-4 text-left">
          Email Me
        </h3>
        <a
          href="mailto:jorgevegb@outlook.com"
          class="text-white hover:underline break-all text-sm text-left"
        >
          jorgevegb@outlook.com
        </a>
      </div>

      <!-- WhatsApp -->
      <div class="flex flex-col space-y-4 py-4">
        <img
          src="@/assets/images/contactIcon2.svg"
          alt="WhatsApp Icon"
          class="w-70 h-70 object-contain"
        />
        <div class="w-10 border-b-4 border-white"></div>
        <h3 class="text-yellow-300 font-semibold italic uppercase text-lg py-4">WhatsApp Me</h3>
        <a
          href="https://wa.me/34691430251"
          target="_blank"
          class="text-white hover:underline text-sm"
        >
          (+34) 691 430 251
        </a>
      </div>

      <div @click="showModal = true" class="flex flex-col space-y-4 py-4">
        <img
          src="@/assets/images/contactIcon3.svg"
          alt="Form Icon"
          class="w-70 h-70 object-contain"
        />
        <div class="w-10 border-b-4 border-white"></div>
        <h3 class="text-yellow-300 font-semibold italic uppercase text-lg py-4">
          Send Me a Message
        </h3>
        <button  class="text-cyan-300 hover:underline text-sm">
          Fill in the form
        </button>
      </div>
    </div>

    <!-- Modal -->
    <transition name="fade">
      <div
        v-if="showModal"
        class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-modal"
      >
        <div
          class="bg-white text-black p-6 rounded-lg w-full max-w-md relative scale-95 transition-all duration-300"
        >
          <button aria-label="Close form modal" @click="closeModal" class="absolute top-2 right-2 text-black text-lg">✖</button>
          <h3 class="text-xl font-bold mb-4 text-center">Send Me a Message</h3>

          <form @submit.prevent="onSubmit">
            <input v-model="name" type="text" placeholder="Name" class="w-full py-4 p-2 border mb-6"/>
            <span v-if="errors.name" class="text-red-500 py-6 text-sm">{{ errors.name }}</span>
            <input v-model="email" type="email" placeholder="Email" class="w-full py-4 p-2 border mb-6" />
            <span v-if="errors.email" class="text-red-500 py-6 text-sm">{{ errors.email}}</span>
            <textarea v-model="message" rows="4" placeholder="Message"  class="w-full py-4 p-2 border mb-6"></textarea>
            <span v-if="errors.name" class="text-red-500 py-6 text-sm">{{ errors.message }}</span>
            <button type="submit" class="bg-black text-white px-4 hover:bg-yellow-300 py-6 hover:text-black transition w-full">Send</button>
          </form>
          <div v-if="success" class="flex items-center justify-center gap-2 text-green-600 mt-4">
            <CheckCircle class="w-5 h-5" />
            <p>Message sent successfully!</p>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { CheckCircle } from 'lucide-vue-next'

// Visibilidad del modal y éxito
const showModal = ref(false)
const success = ref(false)

// Esquema de validación con Yup
const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup.string().required('Message is required'),
})

// useForm y useField para controlar los campos y errores
const { handleSubmit, errors } = useForm({
  validationSchema: schema,
})

const { value: name } = useField('name')
const { value: email } = useField('email')
const { value: message } = useField('message')

// Función para cerrar el modal
const closeModal = () => {
  showModal.value = false
  success.value = false
}

// Función que se ejecuta al hacer submit
const onSubmit = () => {
  const templateParams = {
    from_name: name.value,
    from_email: email.value,
    message: message.value,
  }

  emailjs.send('service_s72ld9m', 'template_nn804jp', templateParams, '2gF0IkwK0hxv0JiTU')
    .then(() => {
      success.value = true
      setTimeout(() => {
        closeModal()
        name.value = ''
        email.value = ''
        message.value = ''
      }, 2500)
    })
    .catch((err) => {
      console.error('EmailJS error:', err)
    })
}
</script>




<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
@keyframes scaleIn {
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-modal {
  animation: scaleIn 0.3s ease-out;
}

.mb-6 {
  margin-top: 6px;
  margin-bottom: 6px;
}


@media screen and (min-width: 981px) and (max-width:1119) {
    .h-full[data-v-c970699f] {
        height: 100vh;
        overflow: hidden;
        top: 0;
        width: 104% !important;
    }
}

@media screen and (min-width: 1120px) and (max-width:1119) {
    .h-full[data-v-c970699f] {
        height: 175vh;
        overflow: hidden;
        top: 0;
        width: 150%;
    }
}
@media screen and (min-width: 1710px) {
    .h-full[data-v-c970699f] {
        height: 200vh;
        overflow: hidden;
        top: 0;
        width: -webkit-fill-available;
    }
}

</style>
