import { writable } from "svelte/store";

export const questions = writable([
]);

export const numberOfQuestions = writable(0);
export const questionsEntered = writable(0);