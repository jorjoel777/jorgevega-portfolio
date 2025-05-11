<template>
  <header class="relative w-full h-screen overflow-hidden text-white" id="home">
    <!-- 🖼️ Logo -->
    <div class="absolute top-4 right-4 sm:top-10 sm:right-10 z-10">
      <div class="w-60 max-w-[320px]">
        <img src="@/assets/images/jorgevegafullstack_logo.svg" alt="Logo" class="w-full h-auto" />
      </div>
    </div>

<!-- 🌐 Desktop Nav Links -->

    <nav class="hidden sm:flex absolute top-24 left-40 z-50 space-x-6 text-white text-sm font-mono tracking-wide">
      <a href="#about" class="px-6  hover:text-yellow-300 transition duration-200">About</a>
      <a href="#projects" class="px-6 hover:text-yellow-300 transition duration-200">Projects</a>
      <a href="#techstack" class="px-6 hover:text-yellow-300 transition duration-200">Tech Stack</a>
      <a href="#contact" class="px-6 hover:text-yellow-300 transition duration-200">Contact</a>
    </nav>


    <!-- 💬 Hero Content -->
    <div id="maintitle" class="relative z-10 flex flex-col justify-end px-6 sm:px-40 pb-6 sm:pb-20">
      <h1
        class="font-title text-yellow-300 text-5xl xs:text-6xl sm:text-7xl font-extrabold italic uppercase leading-tight animate-fadeIn"
      >
        Full Stack <br />
        Developer
      </h1>
      <p
        class="font-body text-white tracking-widest mt-4 uppercase text-xs sm:text-sm animate-fadeIn delay-500"
      >
        Version 2.0 | April 2025
      </p>
    </div>
    <!-- 🔲 Overlay (Black transparent layer over video) -->
    <div class="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

    <!-- 🎬 Background Video -->
    <div class="video-background" >
      <div class="video-foreground" style="background-image: url('@/assets/images/bg_top_header.jpg'); background-size: cover; background-position: center;">
      <!-- Youtube -->
      <iframe src="https://www.youtube.com/embed/YXlJ7Mc5KXk?si=vjzIb6_qPUd-GCvX&a&autoplay=1&mute=1&controls=0&loop=1&playlist=W0LHTWG-UmQ" frameBorder="0"  allowFullScreen allow="autoplay"></iframe>

     <!-- Vimeo -->
     <!-- <iframe src="https://streamable.com/12xsb2?background=1&autoplay=1&loop=1"   frameborder="0"   allowfullscreen  loading="lazy"></iframe>  -->

    </div>
    </div>
    <div class="absolute bottom-6 w-full flex justify-center z-9999">
      <button
          @click="scrollToAbout"
          class="focus:outline-none"
          aria-label="Scroll to About"
      >
          <svg
          width="68"
          height="68"
          viewBox="0 0 68 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="opacity-80 hover:opacity-100 transition"
        >
        <circle cx="24" cy="24" r="22" stroke="#00FF88" stroke-width="2" />
        <path d="M16 20L24 28L32 20" stroke="#00FF88" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 26L24 34L32 26" stroke="#00FF88" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      </button>
    </div>

  </header>
</template>
<script setup>
import { onMounted, onBeforeUnmount } from 'vue'

const setVh = () => {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

onMounted(() => {
  setVh()
  window.addEventListener('resize', setVh)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', setVh)
})
const scrollToAbout = () => {
  const section = document.getElementById('about')
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  } else {
    console.warn('Section with id="about" not found.')
  }
}

</script>

<style scoped>

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


.animate-fadeIn {
  animation: fadeIn 1s ease-out forwards;
}
.delay-500 {
  animation-delay: 0.5s;
}

.bg-opacity-40 {
  background: rgba(0, 0, 0, 0.5);
}
@media screen and (min-width: 981px) {
  .w-full {
    width: 100wh;
    overflow: hidden;
  }
  .h-full {
    height: 200vh;
    overflow: hidden;
  }
  #video {
    z-index: -999;
    top: 0px;
    left: 0px;
  }
  #maintitle {
    margin-top: 20%;
  }
}
:root {
  --vh: 100%;
}

@media (max-width: 980px) {
  #video,
  .h-screen {
    height: calc(var(--vh, 1vh) * 100);
  }
  #video iframe {
    height: 100vh;
    width: 204%;
  }
  #maintitle {
    margin-top: 100%;
    display: block;
    position: absolute;
    margin-bottom: 60px;
  }
}

.z-10 {
  z-index: 9999;
}
.video-background {

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -99;
}

.video-foreground,
.video-background iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

@media (min-aspect-ratio: 16/9) {
  .video-foreground {
    height: 300%;
    top: -100%;
  }
}

@media (max-aspect-ratio: 16/9) {
  .video-foreground {
    width: 300%;
    left: -100%;
  }
}

.content {
   padding: 25px;
   background-color: rgba(#000, .3);
   position: absolute;
   right: 50px;
   bottom: 50px;

   h1 {
      font-family: 'Roboto Slab', serif;
      margin: 0;
      color: #fff;
   }
}
</style>
