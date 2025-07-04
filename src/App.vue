<script setup>
import { RouterView } from 'vue-router'
import NavbarView from '@/views/NavbarView.vue'
import FooterView from '@/views/FooterView.vue'
</script>

<template>
  <div id="app">
    <!-- Sidebar Navigation -->
    <NavbarView />
    
    <!-- Main content area with footer -->
    <div class="main-container">
      <main class="main-content">
        <RouterView />
      </main>
      <footer class="footer">
        <FooterView />
      </footer>
    </div>
  </div>
</template>

<style scoped>
#app {
  display: flex;
  min-height: 100vh; /* Ensure full viewport height */
}

.main-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  /* Remove min-height: 100vh - this was causing the issue */
}

.main-content {
  flex: 1; /* This will grow to fill available space */
  overflow-y: auto;
  padding: 2rem;
  background-color: #f8f9fa;
}

.footer {
  padding: 1rem;
  flex-shrink: 0; /* Footer won't shrink */
  /* Remove margin-top: auto - not needed with this setup */
}

/* Mobile responsiveness */
@media (max-width: 820px) {
  #app {
    flex-direction: column; /* Stack vertically on mobile */
    min-height: 100vh; /* Ensure full height on mobile too */
  }
  
  .main-container {
    flex: 1; /* Take up remaining space after navbar */
    padding-top: 80px; /* Account for fixed mobile header */
  }
  
  .main-content {
    padding: 1rem;
  }
}
</style>