<script>
  import { Router, Route } from "svelte-routing";
  import { numberOfQuestions } from './store';
  import AddAnswers from "./lib/pages/AddAnswers.svelte";
  import AddQuestion from "./lib/pages/AddQuestion.svelte";
  import Home from "./lib/pages/Home.svelte";
  import ThankYou from "./lib/pages/ThankYou.svelte";
  import NotFound from "./lib/pages/NotFound.svelte";

  export let url = "";
</script>

<main>
  <Router url="{url}">
    <div>
      <Route path="/" component="{Home}" />
      {#if $numberOfQuestions > 0}
        <Route path="add-answers" component="{AddAnswers}" />
        <Route path="add-question" component="{AddQuestion}" />
        <Route path="thank-you" component="{ThankYou}" />
      {/if}
      <Route component="{NotFound}" />
    </div>
  </Router>
</main>

<style>

</style>
