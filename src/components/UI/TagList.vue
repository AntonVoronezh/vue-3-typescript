<template>
  <div class="tags-list">
    <div
      class="tag-item"
      v-for="item in items"
      :key="item"
      @click="$emit('onItemClick', item)"
      :class="{ isPreview: isPreview }"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    isPreview: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.tags-list {
  margin: 20px;
  display: flex;
  gap: 20px;

  .isPreview {
    &:before {
      content: "#";
    }
  }
}
.tag-item {
  border: 1px solid gray;
  border-radius: 5px;
  padding: 5px 10px;
  &:hover {
    cursor: pointer;
  }
}
</style>
