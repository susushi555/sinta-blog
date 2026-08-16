export interface NavigationLink {
	href: string;
	label: string;
}

export const navigationLinks: NavigationLink[] = [
	{ href: '/', label: 'About me' },
	{ href: '/timeline', label: 'タイムライン' },
	//{ href: '/goal.html', label: '目標' },
	{ href: '/projects', label: 'プロジェクト集' },
	{ href: '/links', label: '関連リンク集' },
];
