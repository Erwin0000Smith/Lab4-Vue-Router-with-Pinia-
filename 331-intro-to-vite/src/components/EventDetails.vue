<script setup lang="ts">
import { defineProps } from 'vue'
import Event from '@/types/Event'

const props = defineProps<{
  event: Event
}>()
</script>

<template>
  <div class="event-details">
    <p>{{ props.event.category }}</p>
    <p>{{ props.event.organizer }}</p>
  </div>
</template>

<style scoped>
.event-details {
  text-align: right;
  font-size: 16px; /* Adjust the font size as needed */
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
</style>
