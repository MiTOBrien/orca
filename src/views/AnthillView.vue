<script setup>
import { useImageToggle } from '@/composables/useImageToggle'

// Use the reusable composable
const { toggleImage, isImageVisible } = useImageToggle()
</script>

<template>
  <main>
    <h1>Ant Hill Routes</h1>
    <hr />
    <p>
      This area has one route established so far with plenty of rock for other routes to be
      developed. The rock here is approximately 20 feet high and features a variety of holds.
    </p>
    <p>
      Be aware the "swamp" in this area can fill up if there has been heavy rain making the walk
      down to the base after setting up your anchor messy. During this time you may want to rappel
      down from above to climb in this area.
    </p>
    <hr />
    <div class="routes-section">
      <div class="image-toggle-container">
        <button
          @click="toggleImage('anthill-section')"
          class="image-toggle-btn"
          :class="{ active: isImageVisible('anthill-section') }"
        >
          {{ isImageVisible('anthill-section') ? 'Hide' : 'Show' }} Ant Hill Section Overview
        </button>
        <h3>Routes:</h3>
        <div v-if="isImageVisible('anthill-section')" class="image-display">
          <img src="/SwampThang.png" alt="Swamp Thang Route" />
        </div>
      </div>
      <ol>
        <li>Swamp Thang (5.7+)</li>
      </ol>
    </div>
  </main>
</template>

<style scoped></style>
