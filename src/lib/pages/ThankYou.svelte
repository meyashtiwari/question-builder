<script>
  import { questions } from "../../store";
  import { onMount } from 'svelte';

  onMount(() => console.log($questions));
</script>

<div class="flex items-center justify-center h-screen">
    <div>
      <div class="flex flex-col items-center space-y-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="text-green-600 w-28 h-28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h1 class="text-4xl font-bold">Thank You !</h1>
        <p>You can check the console to see your data.</p>
      </div>
    </div>
</div>