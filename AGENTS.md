# Repository Guidelines

## プロジェクト構成とモジュール配置

このリポジトリは `@sveltejs/adapter-cloudflare` を使った SvelteKit アプリです。アプリ本体は `src/` 配下にあり、ルーティングは `src/routes` に配置します。例: `src/routes/+page.svelte`、`src/routes/blog/+page.svelte`。共通 UI や公開用コードは `src/lib`、コンポーネントは主に `src/lib/components` を使います。Storybook 用のサンプルは `src/stories`、画像や `favicon` などの静的ファイルは `static/` に置きます。

## ビルド・テスト・開発コマンド

依存関係は `package-lock.json` に合わせて `npm install` で導入します。

- `npm run dev` : Vite の開発サーバーを起動します。
- `npm run build` : 本番用ビルドを作成し、package 用チェックまで実行します。
- `npm run preview` : ビルド済みアプリをローカル確認用に起動します。
- `npm run check` : `svelte-check` で型と Svelte の整合性を確認します。
- `npm run lint` : ESLint と Prettier のチェックを実行します。
- `npm run format` : Prettier でコード整形を行います。
- `npm run storybook` : Storybook を `6006` 番ポートで起動します。
- `npm run build-storybook` : Storybook の静的ビルドを生成します。

## コーディング規約と命名

整形は Prettier を基準にします。タブインデント、シングルクォート、trailing comma なし、行幅は `100` 文字です。PR 前に `npm run format` を実行してください。Lint は Svelte、TypeScript、Storybook 向けの推奨設定を使っています。

Svelte コンポーネントのファイル名は `HeaderComponent.svelte` のように PascalCase を使います。ルート関連は SvelteKit の規約どおり `+page.svelte`、`+layout.svelte` を使ってください。共通エクスポートは `src/lib/index.ts` に集約します。

## テスト方針

現時点では `*.test.*` や `*.spec.*` の専用テストファイルはありません。そのため最低限の確認は `npm run check`、`npm run lint`、`npm run build` を通すことです。今後テストを追加する場合は、対象機能の近くか `tests/` ディレクトリに置き、`*.test.ts` または `*.spec.ts` を統一して使用してください。UI 変更には Storybook の story 追加も推奨します。

## コミットとプルリクエスト

履歴には `feat: implement sliding menu...` のような Conventional Commits 系の件名が含まれます。コミットメッセージは命令形で簡潔にし、可能なら `feat:`、`fix:`、`chore:` などの接頭辞を付けてください。

プルリクエストには変更内容の要約、関連 Issue へのリンク、UI 変更時のスクリーンショットまたは Storybook 参照、そして `npm run check`、`npm run lint`、`npm run build` を通したことを記載してください。
