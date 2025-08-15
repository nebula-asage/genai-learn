import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
  name: "test-mcp-server",
  version: "1.0.0",
  capabilities: { tools: {} },
});

server.tool(
  "hello",
  "サンプルの挨拶ツール",
  {},
  async () => ({
    content: [{ type: "text", text: "こんにちは、MCPサーバです！" }],
  })
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("MCPサーバ起動中（stdio）");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
