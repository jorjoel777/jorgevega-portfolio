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

      <div class="flex flex-col space-y-4 py-4">
        <img
          src="@/assets/images/contactIcon3.svg"
          alt="Form Icon"
          class="w-70 h-70 object-contain"
        />
        <div class="w-10 border-b-4 border-white"></div>
        <h3 class="text-yellow-300 font-semibold italic uppercase text-lg py-4">
          Send Me a Message
        </h3>
        <button @click="showModal = true" class="text-cyan-300 hover:underline text-sm">
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
          <button @click="closeModal" class="absolute top-2 right-2 text-black text-lg">✖</button>
          <h3 class="text-xl font-bold mb-4 text-center">Send Me a Message</h3>

          <form @submit.prevent="handleSubmit(onSubmit)">
            <input
              v-model="name"
              type="text"
              placeholder="Name"
              class="w-full py-4 p-2 border mb-6"
            />
            <span v-if="errors.name" class="text-red-500 py-6 text-sm">{{ errors.name }}</span>

            <input
              v-model="email"
              type="email"
              placeholder="Email"
              class="w-full p-2 py-4 border mb-6"
            />
            <span v-if="errors.email" class="text-red-500 py-6 text-sm">{{ errors.email }}</span>

            <textarea
              v-model="message"
              rows="4"
              placeholder="Message"
              class="w-full p-2 py-4 border mb-6"
            ></textarea>
            <span v-if="errors.message" class="text-red-500 py-6 text-sm">{{
              errors.message
            }}</span>

            <button
              type="submit"
              class="bg-black text-white px-4 hover:bg-yellow-300 py-6 hover:text-black transition w-full"
            >
              Send
            </button>
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
import emailjs from 'emailjs-com'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { CheckCircle } from 'lucide-vue-next'

// Modal visibility
const showModal = ref(false)
const success = ref(false)

// Vee-Validate schema
const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup.string().required('Message is required'),
})

const { handleSubmit, errors } = useForm({ validationSchema: schema })
const { value: name } = useField('name')
const { value: email } = useField('email')
const { value: message } = useField('message')

const closeModal = () => {
  showModal.value = false
  success.value = false
}

const onSubmit = () => {
  console.log('Sending:', name.value, email.value, message.value)

  emailjs
    .send(
      'service_s72ld9m',
      'template_nn804jp',
      {
        from_name: name.value,
        from_email: email.value,
        message: message.value,
      },
      '2gF0IkwK0hxv0JiTU',
    )
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
      console.error('Error sending email:', err)
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
</style>
