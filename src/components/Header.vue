<template>
  <header class="relative w-full h-screen overflow-hidden text-white" id="home">
    <!-- 🎬 Background Video -->
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute top-0 left-0 w-full h-full object-cover z-0"
    >
      <source src="@/assets/images/jorgevegafullstack_wave.mp4" type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>

    <!-- 🔲 Overlay (Black transparent layer over video) -->
    <div class="absolute top-0 left-0 w-full h-full bg-opacity-40 z-0"></div>

    <!-- 🖼️ Logo -->
    <div class="absolute top-4 right-10 sm:top-10 sm:right-26 z-10">
      <div class="w-60 max-w-[320px]">
        <img src="@/assets/images/jorgevegafullstack_logo.svg" alt="Logo" class="w-full h-auto" />
      </div>
    </div>

    <!-- 💬 Hero Content -->
    <div class="relative z-10 h-full flex flex-col justify-end px-6 sm:px-40 pb-32 sm:pb-24">
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
  </header>
</template>

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
video {
  z-index: -99;
}
.bg-opacity-40 {
  background: rgba(0, 0, 0, 0.4);
}
</style>
