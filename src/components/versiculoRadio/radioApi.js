import express from "express";
import http from "http";

const app = express();

app.get("/api/radio", (req, res) => {

  const radioRequest = http.get(
    "https://stream3.svrdedicado.org/8070/stream",
    (radioResponse) => {

      res.setHeader(
        "Content-Type",
        radioResponse.headers["content-type"] ||
        "audio/mpeg"
      );

      res.setHeader(
        "Cache-Control",
        "no-cache, no-store, must-revalidate"
      );

      radioResponse.pipe(res);

      req.on("close", () => {
        radioResponse.destroy();
      });

    }
  );

  radioRequest.on("error", (error) => {

    console.error(
      "Erro no proxy da rádio:",
      error
    );

    if (!res.headersSent) {
      res.status(502).end();
    }

  });

});

app.listen(3001, () => {
  console.log(
    "Proxy da rádio funcionando na porta 3001"
  );
});