

<template>
  <section class="bg-black w-full text-white px-6 sm:px-12 py-20" id="techstack">
    <div class="container max-w-7xl items-center justify-center mx-auto gap-2">
      <!-- 🏷️ Title -->
      <div class="mb-16 text-left md:text-left">
        <h2
          class="text-cyan-300 text-4xl sm:text-5xl py-4 font-bold uppercase tracking-wide italic"
        >
          Tech Stack
        </h2>
        <h3
          class="text-black-200 text-3xl sm:text-3xl font-bold uppercase tracking-wide italic inline-block mt-12 mb-12 py-4 px-12 bg-yellow-100 text-black text-sm sm:text-base font-semibold"
        >
          Tools I master & love
        </h3>
      </div>

      <!-- 🔲 Tech Stack Grid -->
      <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-3 py-8">
        <div
          v-for="(tool, index) in tech"
          :key="index"
          class="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform"
        >
          <div class="p-6">
            <h3 class="text-yellow-300 text-xl font-semibold mb-2">{{ tool.title }}</h3>
            <p class="text-sm text-gray-300 mb-4">{{ tool.description }}</p>
            <ul class="list-disc pl-5 text-sm text-gray-400 space-y-1">
              <li v-for="(item, i) in tool.items" :key="i">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const tech = [
  {
    title: 'Languages I speak',
    description: 'Beyond syntax, these are my native tongues in code.',
    items: [
      'JavaScript (Node.js, Express)',
      'Python (automation, AI, data)',
      'HTML/CSS (semantic, responsive)',
      'SQL & MongoDB (data models)',
    ],
  },
  {
    title: 'Frameworks & Libraries',
    description: 'I build with what’s proven, scalable and powerful.',
    items: ['Vue.js / React.js', 'Tailwind CSS', 'TensorFlow', 'OpenAI APIs'],
  },
  {
    title: 'Tools I use daily',
    description: 'Where productivity, debugging and shipping happen.',
    items: ['Git & GitHub', 'VS Code', 'Docker', 'Notion / Obsidian', 'Postman / Insomnia'],
  },
]
</script>
