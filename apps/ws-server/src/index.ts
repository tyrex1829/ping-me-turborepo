import { WebSocket, WebSocketServer } from "ws";

import { prisma } from "@repo/db/prisma";

const wss = new WebSocketServer({ port: 8081 });

wss.on("connection", async (ws) => {
  ws.on("error", console.error);

  const res = await prisma.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString(),
    },
  });

  console.log(res);

  ws.on("message", (data, isBinary) => {
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });

  ws.send("Init");
});
