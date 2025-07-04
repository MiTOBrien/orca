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
  height: 100vh;
}

.main-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  overflow-y: auto;
  padding: 2rem;
  background-color: #f8f9fa;
}

.footer {
  padding: 1rem;
  flex-shrink: 0;
  margin-top: auto;
}

/* Mobile responsiveness */
@media (max-width: 820px) {
  #app {
    flex-direction: column; /* Stack vertically on mobile */
  }
  
  .main-container {
    padding-top: 80px; /* Account for fixed mobile header */
  }
  
  .main-content {
    padding: 1rem;
  }
}
</style>