<script>
  export let buttonText="Next";

  import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function clicked() {
		dispatch('clicked', {});
	}
</script>

<div class="mt-4 flex items-center justify-end">
  <button on:click="{clicked}" class="bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">
    { buttonText }
  </button>
</div>