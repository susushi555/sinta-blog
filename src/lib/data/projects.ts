export interface Projects {
	title: string;
	description: string;
	url: string;
	tags: string[];
}

export const projects: Projects[] = [
	{
		title: 'Sugimotos',
		description:
			'私が現在開発を進めているモノリシックカーネルの自作OSです。LLMの力を借りつつCで開発しています。現在カーネルランドとユーザーランドの実装まで完了しました。次は微調整の段階です',
		url: 'https://github.com/sugimoto-blyukher/sugimotos',
		tags: ['OS', 'C', 'Kernel']
	},
	{
		title: 'アジプロジェネレーター',
		description:
			'私が作ったソ連風のアジプロ文を生成するサイトです(今はもう使えない)。開発言語はpythonで、使用したライブラリとフレームワークはgemini apiとfastapiです',
		url: 'https://github.com/sugimoto-blyukher/ajipuro/tree/old',
		tags: ['Python', 'FastAPI', 'GeminiAPI']
	},
	{
		title: 'キラキラネームメーカーのバックエンド',
		description:
			'学内ハッカソンのp2hacksで技術者保育園のバックエンド担当として開発したものです。ESP32と通信して送られてきたデータを元にランダムでキラキラネームをGemini APIで生成し、プリンターで印刷するためのバックエンドです。',
		url: 'https://github.com/sugimoto-blyukher/kirakiraname',
		tags: ['Python', 'FastAPI', 'GeminiAPI', 'WeasyPrint']
	}
];
