<template>
<div>
	<h1>{{ message }}</h1>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import message from './message.ts';

export default Vue.extend({
	data() {
		return {
			message: message()
		};
	}
});
</script>
