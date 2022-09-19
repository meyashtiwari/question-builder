<script>
    import InputBox from "../components/InputBox.svelte";
    import Button from "../components/Button.svelte";
    import { questions, questionsEntered } from "../../store";
    import { navigate } from "svelte-routing";

    let question;
    let questionDescription;

    function setQuestion() {
        if(question === undefined || questionDescription === undefined) {
            alert('Both fields are required');
            return;
        }

        questions.update(questionsArray => [...questionsArray, {id: $questionsEntered, title: question, description: questionDescription}]);
        navigate('/add-answers', { replace: true });
    }
  </script>
  
<div class="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
    <div class="max-w-lg mx-auto text-center">
        <h1 class="text-2xl font-bold sm:text-3xl">Please enter question no. { $questionsEntered + 1 } and it's description</h1>

        <InputBox bind:inputValue={question} placeholderText="Enter question" />
        <InputBox bind:inputValue={questionDescription} placeholderText="Enter description" />
        <Button on:clicked="{setQuestion}"/>
    </div>
</div>
    