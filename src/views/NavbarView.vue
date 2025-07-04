<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <aside class="sidebar" :class="{ 'sidebar-open': isOpen }">
    <div class="sidebar-header">
      <div class="logo">
        <img src="/orca_logo.jpg" alt="ORCA Logo" />
      </div>
      <button @click="toggleMenu" class="menu-toggle">
        <span v-if="!isOpen">☰</span>
        <span v-else>✖</span>
      </button>
    </div>

    <nav class="sidebar-nav">
      <ul class="nav-list" :class="{ open: isOpen }">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/vortex" class="nav-link">Vortex Routes</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/anthill" class="nav-link">Anthill Routes</router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 250px;
  height: 100vh;
  background-color: #333;
  color: white;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
}

.sidebar-header {
  display: flex;
  justify-content: center; /* Center the logo */
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #555;
  position: relative; /* For positioning the menu toggle */
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo h1 {
  margin: 0;
  font-size: 1.5rem;
}

.logo img {
  height: 50px;
  margin-right: 0; /* Remove right margin since it's centered */
}

.menu-toggle {
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  display: none;
  position: absolute; /* Position absolutely within the header */
  right: 1rem; /* Keep it on the right side */
}

.sidebar-nav {
  flex: 1;
  padding: 1rem 0;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  margin-bottom: 0.5rem;
}

.nav-link {
  display: block;
  color: white;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  margin: 0 1rem;
  transition: background-color 0.3s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  background-color: #555;
  text-decoration: none;
}

/* Mobile styles */
@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    height: 100vh;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    z-index: 9999;
  }

  .sidebar-header {
    /* Keep header visible on mobile */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #333;
    z-index: 10000;
    transform: translateX(0); /* Header always visible */
  }

  .sidebar-open {
    transform: translateX(0);
  }

  .sidebar-open .sidebar-header {
    position: relative; /* When open, header moves with sidebar */
  }

  .menu-toggle {
    display: block;
    z-index: 10001;
  }

  .nav-list {
    display: none;
    margin-top: 80px; /* Account for fixed header */
  }

  .nav-list.open {
    display: block;
  }

  .sidebar-nav {
    padding-top: 0; /* Remove top padding since header is fixed */
  }
}

/* Desktop styles */
@media (min-width: 769px) {
  .sidebar {
    position: relative;
    transform: none;
  }

  .nav-list {
    display: block;
  }

  .menu-toggle {
    display: none;
  }
}
</style>