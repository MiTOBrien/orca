<script setup></script>

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
  <div class="hover-container">
    <span class="hover-text">section overview</span>
    <div class="hover-image">
      <img src="/SectionOverview.png" alt="Section Overview" />
    </div>
  </div>
  <hr />
  <h2>Sections 1-3 - approximately 18-20 feet all along one wall</h2>
    <div class="routes-section">
    <h3>Routes section 1:</h3>
    <div class="routes-list">
      <div class="hover-container">
        <span class="hover-text">Vortex Area 1-3 Overview</span>
        <div class="hover-image">
          <img src="/vortex_section1-3.png" alt="Vortex Area 1-3 Overview" />
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
    <div class="hover-container">
    <span class="hover-text">section overview</span>
    <div class="hover-image">
      <img src="/vortex_section5.png" alt="Section Overview" />
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
hr {
  margin: 10px;
}
.hover-container {
  position: relative;
  display: inline-block;
  /* Center the entire container */
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

.hover-text {
  color: #007bff;
  cursor: pointer;
  text-decoration: underline;
  font-weight: 500;
}

.hover-image {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
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
  max-width: 1200px; /* Much larger container */
  max-height: 600px; /* Limit overall height */
}

.hover-image img {
  max-width: 100%;
  max-height: 100%;
  min-width: 600px; /* Ensure minimum readable size */
  width: auto;
  height: auto;
  border-radius: 4px;
  object-fit: contain; /* Maintain aspect ratio */
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
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-bottom-color: #ddd;
}
</style>