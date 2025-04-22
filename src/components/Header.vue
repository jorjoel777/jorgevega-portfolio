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
    <div class="video-background">
      <div class="video-foreground">
      <!-- Youtube -->
     <!-- <iframe src="https://www.youtube.com/embed/W0LHTWG-UmQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=W0LHTWG-UmQ" frameborder="0" allowfullscreen></iframe> -->

     <!-- Vimeo -->
      <iframe src="https://player.vimeo.com/video/1077353800?background=1" frameborder="0" allowfullscreen></iframe>

    </div>
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
.video-background {
  background: #000;
  position: fixed;
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
