export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("scrolls", {
    mounted(el) {
      el.classList.add("before-enter");
      const animatedScrollObserver = new IntersectionObserver(
        (entries, animatedScrollObserver) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("enter");
              animatedScrollObserver.unobserve(entry.target);
            }
          });
        }
      );
      animatedScrollObserver.observe(el);
    },
  });
});

