<template>
  <div>
    <LazyNavbar />
    <div class="wrapper">
      <div class="content">
        <slot />
      </div>
      <LazyPie class="content2" />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}
.content2 {
  flex: 2;
}
</style>