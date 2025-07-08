<script setup>
import { useImageToggle } from '@/composables/useImageToggle'

// Use the reusable composable
const { toggleImage, isImageVisible } = useImageToggle()
</script>

<template>
  <h1>Vortex Routes</h1>
  <hr />
  <p>
    There are nine routes established so far with some others in development. The rock here is
    approximately 20-25 feet high and features a variety of holds.
  </p>
  <p>
    <strong>NOTE:</strong> Routes with a ? have not been sent and may contain loose limestone that
    could be a hazard to climbers and belayers. Routes labeled "Recommended rappel only" are
    extremely pocked with loose limestone. Climb and belay at your own risk.
  </p>
  
  <div class="image-toggle-container">
    <button 
      @click="toggleImage('section-overview')" 
      class="image-toggle-btn"
      :class="{ 'active': isImageVisible('section-overview') }"
    >
      {{ isImageVisible('section-overview') ? 'Hide' : 'Show' }} Section Overview
    </button>
    <div 
      v-if="isImageVisible('section-overview')" 
      class="image-display"
    >
      <img src="/SectionOverview.png" alt="Section Overview" />
    </div>
  </div>
  
  <hr />
  <h2>Sections 1-3 - approximately 18-20 feet all along one wall</h2>
  
  <div class="routes-section">
    <h3>Routes section 1:</h3>
    <div class="routes-list">
      <div class="image-toggle-container">
        <button 
          @click="toggleImage('vortex-1-3')" 
          class="image-toggle-btn"
          :class="{ 'active': isImageVisible('vortex-1-3') }"
        >
          {{ isImageVisible('vortex-1-3') ? 'Hide' : 'Show' }} Vortex Area 1-3 Overview
        </button>
        <div 
          v-if="isImageVisible('vortex-1-3')" 
          class="image-display"
        >
          <img src="/vortex_section1-3.png" alt="Vortex Area 1-3 Overview" />
        </div>
      </div>
    </div>
  </div>
  
  <ol>
    <li>Spelunking (5.?)</li>
    <li>Shinebox (5.?)</li>
    <li>Twisted Trunk (5.?)</li>
    <li>Dove (Recommended rappel only)</li>
    <li>Gopher (Recommended rappel only)</li>
    <li>Corn Snake (5.?)</li>
    <li>Armadillo (Recommended rappel only)</li>
    <li>Elevator (Path to top for setting anchors)</li>
    <li>I'm Your Huckleberry (5.6)</li>
    <li>Squirrel (5.5)</li>
    <li>Falling Iguana (5.6)</li>
    <li>Cheese Grater (5.7)</li>
    <li>Stupid Rope (5.6)</li>
  </ol>
  
  <hr />
  <h2>Section 4</h2>
  <p>No routes established in this section yet.</p>
  
  <hr />
  <h2>Section 5 - approximately 25 feet</h2>
  
  <div class="image-toggle-container">
    <button 
      @click="toggleImage('section-5')" 
      class="image-toggle-btn"
      :class="{ 'active': isImageVisible('section-5') }"
    >
      {{ isImageVisible('section-5') ? 'Hide' : 'Show' }} Section 5 Overview
    </button>
    <div 
      v-if="isImageVisible('section-5')" 
      class="image-display"
    >
      <img src="/vortex_section5.png" alt="Section 5 Overview" />
    </div>
  </div>
  
  <ol>
    <li>Ants In My Pants (5.9)</li>
    <li>Ants In My Crack (5.7)</li>
  </ol>
  
  <hr />
  <h2>Section 6</h2>
  <p>No routes established in this section yet.</p>
</template>

<style scoped>
/* Only component-specific styles here */
.routes-section {
  /* Add any VortexView-specific styling here */
}

.routes-list {
  /* Add any VortexView-specific styling here */
}
</style>