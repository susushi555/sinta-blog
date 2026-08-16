export interface Link {
	title: string;
	url: string;
	description?: string;
}

export const links: Link[] = [
	{
		title: 'GitHub',
		url: 'https://github.com/sugimoto-blyukher',
		description: '私のGitHubアカウントです。私のプロジェクトを公開しています。'
	},
	{
		title: 'X(大学垢) (sugimoto(cedar root))',
		url: 'https://twitter.com/sug1m0t0_unk',
		description: '私のXアカウントです。'
	},
	{
		title: 'sugimoto',
		url: 'https://sugimoto.fun',
		description: '私の個人サイトです。'
	}
];
