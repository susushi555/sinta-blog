export interface TimelineEntry {
	date: string;
	event: string;
}

export const timelineEntries: TimelineEntry[] = [
	{ date: '2019', event: '初めてプログラミングをする(言語はRuby)' },
	{ date: '2020/04/xx', event: 'メインPCにUbuntuをインストールする' },
	{
		date: '2020/07/27',
		event: 'コンピュータの仕組みを追求したくなったため、低レイヤーに興味を持つ(その後一旦挫折)'
	},
	{ date: '2021/03/31', event: '中学卒業' },
	{ date: '2021/03/xx', event: 'プログラミングから離れる' },
	{ date: '2021/04/01', event: '高校入学' },
	{ date: '2021/10/01', event: '高校自主退学' },
	{ date: '2023/11/20', event: 'とある高専生がきっかけで情報系学部に進学することを決意する' },
	{ date: '2025/04/01', event: '公立はこだて未来大学入学' },
	{ date: '2025/04/15~2025/9/xx', event: 'ETロボコンに参加' },
	{ date: '2025/05/01', event: '低レイヤー熱が再燃する' },
	{ date: '2025/12/21', event: 'P2hacks CyberAgent賞受賞' }
];
