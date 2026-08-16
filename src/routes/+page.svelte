<script>
	import SiteShell from '$lib/components/layout/SiteShell.svelte';
	import { goals } from '$lib/data/home.js';
</script>

<SiteShell>
	<main class="bg-amber-400 min-h-screen flex flex-col">
		<section
			id="about"
			class="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center flex-grow scroll-mt-20"
		>
			<div class="flex justify-center md:justify-end">
				<img
					src="/ore2.jpg"
					alt="Sugimoto"
					class="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
				/>
			</div>

			<div class="flex flex-col items-center text-center dotgothic16-regular">
				<h1 class="text-4xl pt-4 md:pt-0 font-bold">About me</h1>
				<p class="text-lg">公立はこだて未来大学１年生です。</p>
				<p class="text-lg px-4">制御工学、ロボティクス、低レイヤーやfpgaなどに興味があります。</p>
				<p class="text-lg px-4">最近は低レイヤーに焦点を絞って学習に取り組んでいます</p>

				<h2 id="goals" class="text-4xl pt-8 font-bold scroll-mt-20">目標</h2>
				<div class="text-xl mt-4">
					<table class="border-separate border-spacing-y-2">
						<tbody>
							{#each goals as goal (goal)}
								<tr>
									<td>{goal}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
				<h2 class="text-4xl pt-8 font-bold scroll-mt-20">このサイトについて</h2>
				<p>タイムライン：個人史</p>
				<p>プロジェクト集：私が開発した/しているもの集</p>
				<p>リンク集：xやGitHubなど私に関連したリンクを集めたページ</p>
			</div>
		</section>

		<hr class="border-cyan-800 border-2 mx-8 opacity-50" />
	</main>
</SiteShell>
