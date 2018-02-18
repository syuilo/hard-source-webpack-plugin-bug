<template>
<p>{{ message }}</p>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	props: ['message']
});
</script>
