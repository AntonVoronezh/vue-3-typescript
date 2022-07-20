<template>
  <div class="notes-list">
    <div class="note-item" v-for="(note, index) in items" :key="index">
      <div class="note-header">
        <h2>{{ note.title }}</h2>
        <p @click="$emit('onRemove', index)" class="close">&#10005;</p>
      </div>
      <div class="note-footer">
        <TagList isPreview v-if="note.tags.length" :items="note.tags" />
      </div>
    </div>
  </div>
</template>

<script>
import TagList from "@/components/UI/TagList";

export default {
  components: { TagList },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {},
};
</script>

<style lang="scss">
.note-item {
  border: 1px solid gray;
  border-radius: 5px;
  margin: 20px;
  padding: 10px;
}

.note-header {
  display: flex;
  justify-content: space-between;
}

.close:hover {
  cursor: pointer;
}

h2 {
  color: blue;
}
</style>
