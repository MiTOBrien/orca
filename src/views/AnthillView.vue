<script setup></script>

<template>
  <h1>Ant Hill Routes</h1>
  <hr />
  <p>
    This area has one route established so far with plenty of rock for other routes to be developed.
    The rock here is approximately 20 feet high and features a variety of holds.
  </p>
  <p>
    Be aware the "swamp" in this area can fill up if there has been heavy rain making the walk down
    to the base after setting up your anchor messy. During this time you may want to rappel down
    from above to climb in this area.
  </p>

  <div class="routes-section">
    <h3>Routes:</h3>
    <div class="routes-list">
      <div class="hover-container">
        <span class="hover-text">1. Swamp Thang (5.7+)</span>
        <div class="hover-image">
          <img src="/SwampThang.png" alt="Swamp Thang Route" />
        </div>
      </div>

      <!-- You can add more routes here -->
      <!-- 
      <div class="hover-container">
        <span class="hover-text">Another Route (5.8)</span>
        <div class="hover-image">
          <img src="/AnotherRoute.png" alt="Another Route" />
        </div>
      </div>
      -->
    </div>
  </div>
</template>

<style scoped>
.routes-section {
  margin-top: 2rem;
}

.routes-section h3 {
  margin-bottom: 1rem;
  color: #333;
}

.routes-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}

.hover-container {
  position: relative;
  display: inline-block;
  margin-bottom: 0.5rem;
}

.hover-text {
  color: #007bff;
  cursor: pointer;
  text-decoration: underline;
  font-weight: 500;
  font-size: 1.1rem;
}

.hover-text:hover {
  color: #0056b3;
}

.hover-image {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border: 2px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;
  z-index: 1000;
  max-width: 400px;
}

.hover-image img {
  width: 100%;
  height: auto;
  border-radius: 4px;
  max-width: 350px;
}

.hover-container:hover .hover-image {
  opacity: 1;
  visibility: visible;
}

/* Optional: Add a small arrow pointing up */
.hover-image::before {
  content: '';
  position: absolute;
  top: -8px;
  left: 20px;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid #ddd;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hover-image {
    left: 50%;
    transform: translateX(-50%);
    max-width: 300px;
  }

  .hover-image::before {
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>