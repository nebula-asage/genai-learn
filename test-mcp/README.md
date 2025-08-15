# test-mcp-server

MCP（Model Context Protocol）サーバの最小サンプル（TypeScript/Node.js）です。

## 概要
- MCPサーバとして「hello」ツールを提供します。
- VS CodeやMCP対応クライアントから呼び出し可能です。
- サーバはSTDIO通信で動作します。

## セットアップ手順

### 1. 依存パッケージのインストール

```
npm install
```

### 2. TypeScriptビルド

```
npm run build
```

### 3. サーバ起動

```
npm start
```

`MCPサーバ起動中（stdio）` と表示されれば起動成功です。

## VS Code連携

`.vscode/mcp.json` を作成済みです。VS CodeのMCPクライアントから以下設定で接続できます。

```json
{
  "servers": {
    "test-mcp-server": {
      "type": "stdio",
      "command": "node",
      "args": ["${workspaceFolder}/build/index.js"]
    }
  }
}
```

## テスト用プロンプト

MCPクライアントから `hello` を送信してください。

- 返答例: `こんにちは、MCPサーバです！`

## 開発メモ
- サーバ実装: `src/index.ts`
- TypeScript設定: `tsconfig.json`
- パッケージ管理: `package.json`
- 不要ファイル除外: `.gitignore`

## 参考リンク
- [MCP公式SDK (TypeScript)](https://github.com/modelcontextprotocol/typescript-sdk)
- [MCP公式サーバ例](https://github.com/modelcontextprotocol/servers)

---
ご質問・機能追加要望はお気軽にどうぞ。
