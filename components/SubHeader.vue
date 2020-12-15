<template>
  <div class="subHeader contenedor">
    <h1>
      <span>{{ title }}</span>
    </h1>
    <small>{{ description }} </small>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String },
    description: { type: String }
  }
};
</script>

<style lang="scss">
.subHeader {
  text-align: center;
  padding: 15rem 0;
  @media (max-width: 768px) {
    padding: 10rem 0;
  }
}
</style>
