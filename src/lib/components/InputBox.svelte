<script>
  export let labelText="Number of questions?";
  export let labelFor="questions";
  export let placeholderText="Enter number of questions";

  export let inputValue;
</script>

<div>
    <label for="{ labelFor }" class="sr-only">{ labelText }</label>
    <div class="relative">
      <input
        class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
        placeholder="{ placeholderText }"
        bind:value={inputValue}
      />
    </div>
</div>