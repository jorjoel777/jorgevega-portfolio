<template>
  <section class="bg-black w-full text-white px-6 sm:px-12 py-20" id="projects">
    <div class="container max-w-7xl items-center justify-center mx-auto gap-2">
      <!-- 🏷️ Title -->
      <div class="mb-16 text-left md:text-left">
        <h2
          class="text-cyan-300 text-4xl sm:text-5xl py-4 font-bold uppercase tracking-wide italic"
        >
        Projects
        </h2>
        <h3
          class="text-black-200 text-3xl sm:text-3xl font-bold uppercase tracking-wide italic inline-block mt-12 mb-12 py-4 px-12 bg-yellow-100 text-black text-sm sm:text-base font-semibold"
        >
          Deployed in Vercel
        </h3>
      </div>

<!-- Projects Grid -->
<div class="grid gap-12 md:grid-cols-2 lg:grid-cols-3 py-8">
  
  <!-- 🌟 Featured Project spans full width -->
  <div class="col-span-full bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform">
    <a :href="featuredProject.vercel" target="_blank">
      <img :src="featuredProject.image" :alt="featuredProject.title" class="w-full h-64 object-cover" />
    </a>
    <div class="p-6">
      <h3 class="text-yellow-300 text-2xl font-bold mb-4">{{ featuredProject.title }}</h3>
      <p class="text-sm text-gray-300 whitespace-pre-line mb-4">{{ featuredProject.description }}</p>
      <a :href="featuredProject.vercel" target="_blank" class="text-cyan-400 hover:underline text-sm">Live Demo</a>
    </div>
  </div>

  <!-- Project Cards -->
  <div
    v-for="(project, index) in projects"
    :key="index"
    class="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform"
  >
    <a :href="project.vercel" target="_blank">
      <img :src="project.image" :alt="project.title" class="w-full h-40 object-cover" />
    </a>
    <div class="p-6">
      <h3 class="text-yellow-300 text-xl font-semibold mb-2">{{ project.title }}</h3>
      <p class="text-sm text-gray-300 mb-4">{{ project.description }}</p>
      <div class="flex justify-between items-center text-sm">
        <a :href="project.vercel" target="_blank" class="text-cyan-400 hover:underline">Live Demo</a>
        <a v-if="project.github" :href="project.github" target="_blank" class="text-gray-400 hover:underline">GitHub</a>
        <span v-else class="italic text-gray-500">Private Repo</span>
      </div>
    </div>
  </div>
</div>

    </div>
  </section>
</template>

<script setup>
import project1 from '@/assets/images/project1.png'
import project2 from '@/assets/images/project2.png'
import project3 from '@/assets/images/project3.png'
import featuredBanner from '@/assets/images/jvegachatbanner.png'

const featuredProject = {
  title: 'jvegaCHAT',
  description: `💬 jvegachat is a chat application deployed on Vercel, built with Next.js, Tailwind CSS, and TypeScript, featuring serverless backend functionality via Firebase.

It integrates two distinct Firestore collections:

- leads – stores data from new users or prospective contacts  
- messages – logs chat conversations in real-time

The app connects to OpenRouter for seamless interaction with multiple LLM providers, enabling AI-powered responses.

Perfect for conversational UX testing, lead generation, or custom assistant integration.`,
  image: featuredBanner,
  vercel: 'https://jvegachat.vercel.app/',
}

const projects = [
  {
    title: 'Anime View',
    description:
      'Personal project to test ad monetization with anime content. Built with TypeScript and Next.js.',
    image: project1,
    vercel: 'https://animeview.vercel.app/',
    github: null, // Private repo
  },

  {
    title: 'Next.js Docs Clone',
    description: 'A documentation layout clone to practice Next.js routing and structure.',
    image: project3,
    vercel: 'https://nextjs-docs-jorjoel777.vercel.app/',
    github: null, // Private repo
  },
  {
    title: 'Grid Vue Test',
    description: 'Test layout created for SingularCover in 2018. Based on Vue.js and CSS grid.',
    image: project2,
    vercel: 'https://grid-vue.vercel.app/',
    github: null, // Private repo
  }
]

console.log('🔎 Featured Project:', featuredProject)
</script>
