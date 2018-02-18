<template>
<div>
	<h1>Hi</h1>
	<my-message message="yo"/>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Message from './message.vue';

export default Vue.extend({
	components: {
		'my-message': Message
	}
});
</script>

