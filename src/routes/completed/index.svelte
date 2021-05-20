<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/todos?completed=true');
		const jsonResult = await res.json();
		return { props: { todos: jsonResult.todos } };
	}
</script>

<script lang="ts">
	import type { TodoType } from "src/types/todo.type";

	export let todos: Array<TodoType>
	const sleep = (m) => new Promise((r) => setTimeout(r, m));

	async function completeTodo(todo) {
		await sleep(300);
		try {
			const result = await fetch('/todos', {
				method: 'PUT',
				body: JSON.stringify(todo)
			});
			const data = await result.json();
			refreshTodos();
		} catch (err) {
			alert(err);
		}
	}

	async function refreshTodos() {
		const res = await fetch('/todos?completed=true');
		const jsonResult = await res.json();
		todos = jsonResult.todos;
	}
</script>

<div class="text-center text-3xl font-thin">Todos Done</div>
<div class="flex-grow px-28 flex justify-center items-start">
	<div class="flex flex-col w-1/2">
		<div class="w-full flex flex-col">
		{#each todos as todo}
			<div class="bg-blue-200 my-1 px-2 flex justify-between p-1 shadow">
				<span>{todo.description}</span>
				<input
					type="checkbox"
					bind:checked={todo.completed}
					class="form-checkbox p-2 bg-blue-50 border-blue-300 m-1 
                     checked:bg-blue-600 focus:ring-0" 
					 on:change={() => completeTodo(todo)}>
			</div>
		{/each}
		</div>
	</div>
</div>
<div class="text-center">&nbsp;</div>
