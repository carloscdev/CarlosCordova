<template>
  <div>
    <nuxt-link :to="'/characters/' + data.id">
      <div>
        <img :src="data.image" class="w-full" :alt="data.name" />
      </div>
      <div>
        <p>
          <span
            :class="
              data.status === 'Alive'
                ? 'bg-green-500'
                : data.status === 'Dead'
                ? 'bg-red-500'
                : 'bg-gray-500'
            "
          ></span>
          {{ data.status }}
        </p>
        <h2>
          {{ data.name }}
        </h2>
        <p>{{ data.species }} - {{ data.gender }}</p>
        <div>
          <p>Origin location</p>
          <p>{{ data.origin.name }}</p>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
      default: () => {}
    }
  }
};
</script>
