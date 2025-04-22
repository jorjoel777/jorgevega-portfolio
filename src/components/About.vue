<template>
  <section  id="about" class="relative w-full bg-black text-white px-6 sm:px-12 py-20">
    <div
      class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 sd:grid-cols-1 items-center justify-center gap-2"
    >
      <!-- 🧠 Text block -->
      <div class="space-y-6 animate-fadeIn text-left md:text-left">
        <h2 class="text-yellow-300 text-4xl sm:text-5xl font-bold uppercase tracking-wide italic">
          Who am I
        </h2>

        <!-- 🎨 Color accents -->
        <div class="flex mt-2 space-x-2 py-8 px-0">
          <img
            src="@/assets/images/separador1.svg"
            alt="separador"
            class="h-4 sm:h-8 md:h-8 w-auto"
          />
        </div>

        <!-- 👤 Description -->
        <p class="text-gray-300 leading-relaxed text-lg max-w-prose">
          I'm Jorge Vega Brenes, a 48-year-old Full Stack Developer based in Spain. Since 2019, I’ve
          been working as a freelance developer, combining technical precision with creative
          problem-solving. My background includes developing both frontend and backend solutions
          using popular frameworks like React and Vue, as well as integrating content-driven
          experiences through modern CMS platforms.
        </p>
        <p  class="text-gray-400 text-base italic">
          Passionate about innovation, I believe in delivering code that communicates, connects, and
          grows with people.
        </p>
      </div>

      <!-- 🖼️ Profile & CV -->
      <div class="relative z-10 flex flex-col items-center space-y-6 animate-fadeIn delay-300">
        <img
          src="@/assets/images/jorgevegafullstack_about.svg"
          alt="Jorge Vega"
          class="w-100 h-100 sm:w-100 sm:h-100 md:w-100 md:h-100 object-contain shadow-lg"
        />

        <a
          href="/Jorge_Vega_Lead_Software_Engineer.pdf"
          download
          class="text-yellow-400 hover:text-cyan-400 text-xl font-semibold tracking-wide transition-colors duration-300"
        >
          Download CV
        </a>
      </div>
    </div>
  </section>
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
.delay-300 {
  animation-delay: 0.3s;
}
</style>
