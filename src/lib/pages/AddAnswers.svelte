<script>
    import InputBox from "../components/InputBox.svelte";
    import Button from "../components/Button.svelte";
    import { questions, numberOfQuestions, questionsEntered } from "../../store";
    import { navigate } from "svelte-routing";

    let answers = [];
    let answerFields = 1;

    const addField = () => {
        answerFields += 1;
    };

    const removeField = () => {
        answerFields -= 1;
        answers.splice(answers.length-1, 1); 
    };

    function saveAnswers() {
        if(answers.length === 0 || answers.length !== answerFields) {
            alert('Fields can not be left empty');
            return;
        }

        questions.update(questionsArray => {
            questionsArray.map((question) => {
                if(question.id === $questionsEntered) {
                    question.answers = answers;
                }
            });

            return questionsArray;
        });
        questionsEntered.update(value => value+1);

        if($questionsEntered == $numberOfQuestions) {
            navigate('/thank-you', {replace: true});
            return;
        }

        navigate('/add-question', { replace: true });
    }

  </script>
  
<div class="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
    <div class="max-w-lg mx-auto text-center">
        <h1 class="text-2xl font-bold sm:text-3xl">Please enter answers for question no. { $questionsEntered + 1 }</h1>


        {#each Array(answerFields) as _, value}
            <InputBox bind:inputValue={answers[value]} placeholderText="Enter answer" />
        {/each}
        <div class="flex justify-between">
            {#if answerFields > 1}
                <Button on:clicked={removeField} buttonText="Remove answer" />
            {/if}
            <Button on:clicked="{addField}" buttonText="Add answer" />
            <Button on:clicked="{saveAnswers}" buttonText="Save answers" />
        </div>
    </div>
</div>