import { onMounted } from 'vue'
import type { Ref } from 'vue'

export function scrollAnimation(elementRef: Ref<HTMLElement | null>) {
  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          } else {
            entry.target.classList.remove('animate-in')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (elementRef.value) {
      observer.observe(elementRef.value)
    }
  })
}