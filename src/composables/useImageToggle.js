// composables/useImageToggle.js
import { ref } from 'vue'

export function useImageToggle() {
  const visibleImages = ref(new Set())

  const toggleImage = (imageId) => {
    if (visibleImages.value.has(imageId)) {
      visibleImages.value.delete(imageId)
    } else {
      visibleImages.value.add(imageId)
    }
    // Trigger reactivity
    visibleImages.value = new Set(visibleImages.value)
  }

  const isImageVisible = (imageId) => {
    return visibleImages.value.has(imageId)
  }

  const hideImage = (imageId) => {
    visibleImages.value.delete(imageId)
    visibleImages.value = new Set(visibleImages.value)
  }

  const showImage = (imageId) => {
    visibleImages.value.add(imageId)
    visibleImages.value = new Set(visibleImages.value)
  }

  const hideAllImages = () => {
    visibleImages.value.clear()
    visibleImages.value = new Set(visibleImages.value)
  }

  return {
    visibleImages,
    toggleImage,
    isImageVisible,
    hideImage,
    showImage,
    hideAllImages
  }
}