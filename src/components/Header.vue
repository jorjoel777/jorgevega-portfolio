<template>
  <header class="relative w-full h-screen overflow-hidden text-white" id="home">
    <!-- 🖼️ Logo -->
    <div class="absolute top-4 right-4 sm:top-10 sm:right-10 z-10">
      <div class="w-60 max-w-[320px]">
        <img src="@/assets/images/jorgevegafullstack_logo.svg" alt="Logo" class="w-full h-auto" />
      </div>
    </div>

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
    <div id="video" class="absolute inset-0 overflow-hidden -z-10">
      <iframe
        src="https://player.vimeo.com/video/1077353800?background=1&autoplay=1&loop=1&muted=1"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
        class="w-full h-full object-cover pointer-events-none"
      ></iframe>
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
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
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
</style>
