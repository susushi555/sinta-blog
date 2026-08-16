<script lang="ts">
	import SiteShell from '$lib/components/layout/SiteShell.svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { onMount } from 'svelte';

	const redirectPath = '/';
	const redirectDelayMs = 3000;

	let secondsLeft = $state(redirectDelayMs / 1000);

	onMount(() => {
		if (page.status !== 404) {
			return;
		}

		const countdownId = window.setInterval(() => {
			secondsLeft = Math.max(0, secondsLeft - 1);
		}, 1000);

		const redirectId = window.setTimeout(() => {
			void goto(redirectPath, { replaceState: true });
		}, redirectDelayMs);

		return () => {
			window.clearInterval(countdownId);
			window.clearTimeout(redirectId);
		};
	});
</script>

<svelte:head>
	<title>404 | Sugimoto Portfolio</title>
</svelte:head>

<SiteShell>
	<main class="min-h-screen bg-amber-400 px-4 py-12">
		<section
			class="mx-auto flex max-w-3xl flex-col items-center rounded-3xl border-4 border-cyan-900 bg-white/75 px-6 py-12 text-center text-cyan-950 shadow-xl backdrop-blur-sm md:px-10"
		>
			<p class="dotgothic16-regular text-xl md:text-2xl">404 Not Found</p>
			<h1 class="dotgothic16-regular pt-4 text-4xl md:text-6xl">
				指定されたページは見つかりません
			</h1>
			<p class="pt-6 text-lg leading-relaxed md:text-xl">
				リンク先が変更されたか、URL が間違っている可能性があります。
			</p>

			{#if page.status === 404}
				<p class="pt-4 text-base md:text-lg">
					{secondsLeft} 秒後にトップページへ移動します。
				</p>
			{/if}

			<div class="mt-8 flex flex-col gap-4 sm:flex-row">
				<a
					href={redirectPath}
					class="rounded-full bg-cyan-900 px-6 py-3 text-lg font-bold text-white transition-colors hover:bg-cyan-700"
				>
					トップページへ戻る
				</a>
				<a
					href="/links"
					class="rounded-full border-2 border-cyan-900 px-6 py-3 text-lg font-bold text-cyan-900 transition-colors hover:bg-cyan-900 hover:text-white"
				>
					関連リンクを見る
				</a>
			</div>
		</section>
	</main>
</SiteShell>
