<script>
  import InputBox from "../components/InputBox.svelte";
  import Button from "../components/Button.svelte";
  import { numberOfQuestions, questionsEntered } from "../../store";
  import { navigate } from "svelte-routing";
  let numberFromInput;

  function setNumberOfQuestions() {
    let parsedNumber = parseInt(numberFromInput);

    if(parsedNumber > 0) {
      numberOfQuestions.set(numberFromInput);
      questionsEntered.set(0);
      navigate("/add-question", { replace: true });
    } else {
      alert("Number of questions should be an integer value and greater than 0");
      numberFromInput = 0;
    }
  }
</script>

<div class="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
    <div class="max-w-lg mx-auto text-center">
      <h1 class="text-2xl font-bold sm:text-3xl">How many questions you want to enter?</h1>

      <InputBox bind:inputValue={numberFromInput} />
      <Button on:clicked="{setNumberOfQuestions}"/>
    </div>
</div>
  