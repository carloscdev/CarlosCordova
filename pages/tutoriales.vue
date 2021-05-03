<template>
  <div class="tutorials">
    <SubHeader :title="'Tutoriales'" :description="'Para desarrolladores web'" />
    <div class="tutorials__contenedor">
      <Loading v-if="loading" />
      <div class="lista contenedor">
        <div
          class="item sombra"
          v-for="(l, index) in list" :key="index"
          @click="openModal(l.code)"
        >
        <h3>
          <span class="number color-rojo">
            {{ (index > 9) ? '' : '0' }}{{ index + 1 }}
          </span> <br />
          {{ l.name }}
        </h3>
        <small><span>{{ l.tech }}</span> <font-awesome-icon :icon="['fas', 'arrow-right']" /></small>
        </div>
      </div>
    </div>
    <div
      class="tutorials__video"
      v-if="openVideo"
      @click.self="closeModal"
    >
      <iframe 
        class="video"
        :src="`https://www.youtube.com/embed/${codeVideo}`"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div class="close" @click="closeModal">
        <font-awesome-icon :icon="['fas', 'times']" />
      </div>
    </div>
    <Help />
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      codeVideo: '',
      openVideo: false,
      loading: true
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    async getList() {
      try {
        const response = await this.$axios.$get('tutorials.json')
        for (let id in response) {
          this.list.push(response[id]);
        }
        this.codeVideo = await this.list[0].code
        this.loading = false
      } catch (error) {
        this.loading = false
      }
    },
    openModal(id) {
      this.codeVideo = id
      this.openVideo = true
    },
    closeModal() {
      this.openVideo = false
    }
  }
}
</script>
<style lang="scss">
.aboutPage {
  @media (max-width: 768px) {
    padding-top: var(--margen-grande);
  }
}
</style>
