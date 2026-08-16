<script lang="ts">
	import { navigationLinks } from '$lib/data/navigation.js';

	let isMenuOpen = $state(false);

	function openMenu() {
		isMenuOpen = true;
	}

	function closeMenu() {
		isMenuOpen = false;
	}
</script>

<!-- Overlay for menu -->
<button
	type="button"
	class={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
		isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
	}`}
	onclick={closeMenu}
	aria-label="メニューを閉じる"
></button>

<!-- Slide Menu -->
<nav
	class={`fixed top-0 right-0 z-50 h-full w-64 transform bg-cyan-900 text-white shadow-2xl transition-transform duration-500 ease-in-out dotgothic16-regular ${
		isMenuOpen ? 'translate-x-0' : 'translate-x-full'
	}`}
>
	<div class="p-6 flex flex-col h-full">
		<div class="flex justify-end mb-8">
			<button
				type="button"
				class="text-white hover:text-amber-400 transition-colors"
				onclick={closeMenu}
				aria-label="メニューを閉じる"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-8 w-8"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
		</div>
		<ul class="space-y-6 text-2xl text-center">
			{#each navigationLinks as link (link.href)}
				<li>
					<a
						href={link.href}
						class="hover:text-amber-400 block py-2 border-b border-cyan-700"
						onclick={closeMenu}
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<header class="bg-cyan-800 p-4 relative flex items-center justify-center">
	<div class="text-center w-full">
		<a href="/"
			><h1 class="text-5xl md:text-8xl dotgothic16-header text-white">
				Sugimotoのポートフォリオ
			</h1></a
		>
	</div>
	<!-- Hamburger Button -->
	<button
		type="button"
		class="absolute right-4 text-white hover:text-amber-400 transition-colors z-30 p-2"
		onclick={openMenu}
		aria-label="メニューを開く"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-10 w-10 md:h-12 md:w-12"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M4 6h16M4 12h16M4 18h16"
			/>
		</svg>
	</button>
</header>
