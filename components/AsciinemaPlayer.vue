<script setup lang="ts">
import { ref, onMounted } from 'vue'
import 'asciinema-player/dist/bundle/asciinema-player.css'
const props = defineProps<{
    url: string
    options?: Partial<{
        cols: number
        rows: number
        autoPlay: boolean
        preload: boolean
        loop: boolean
        startAt: number | string
        speed: number
        idleTimeLimit: number
        theme: string
        poster: string
        fit: string
        fontSize: string
    }>
}>()

const asciinemaRef = ref()
onMounted(() => {
    import('asciinema-player').then((AsciinemaPlayer) => {
        AsciinemaPlayer.create(props.url, asciinemaRef.value, props.options)
    })
})
</script>

<template>
    <div ref="asciinemaRef" class="m-3"></div>
</template>

<style scoped>
:deep(.ap-player) svg {
    display: inline-block;
}
:deep(.ap-player) {
    margin-top: 1rem;
    margin-bottom: 1rem;
}
</style>