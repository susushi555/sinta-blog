<script lang="ts">
	import HeadComponents from '$lib/components/HeadComponents.svelte';
	import FooterComponents from '$lib/components/FooterComponents.svelte';
	import HeaderComponent from '$lib/components/HeaderComponent.svelte';
	import '../../../app.css';

	interface Props {
		showHead?: boolean;
		showFooter?: boolean;
		children?: import('svelte').Snippet;
	}

	let { showHead = true, showFooter = true, children }: Props = $props();
</script>

{#if showHead}
	<HeadComponents />
{/if}

<HeaderComponent />

<div class="dotgothic16-regular">
	{#if children}
		{@render children()}
	{/if}
</div>

{#if showFooter}
	<FooterComponents />
{/if}
