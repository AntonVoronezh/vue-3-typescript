<template>
  <p>home pahe</p>
  <TheForm @onSubmit="handleSubmit" />
  <TheList :items="notes" @onRemove="handleRemove" />
</template>

<script>
import TheForm from "@/components/Notes/TheForm";
import TheList from "@/components/Notes/TheList";

export default {
  components: { TheForm, TheList },
  data() {
    return {
      notes: [
        {
          title: "111111",
          tags: ["aaaaa"],
        },
        {
          title: "22222",
          tags: ["bbbbb", "ccccc"],
        },
        {
          title: "33333",
          tags: [],
        },
      ],
    };
  },
  methods: {
    handleSubmit(val) {
      const notes = {
        title: val,
        tags:[]
      }
      this.notes.push(notes);
    },
    handleRemove(idx) {
      this.notes.splice(idx, 1);
    },
  },
};
</script>
