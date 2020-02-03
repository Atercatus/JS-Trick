function httpRequest(params) {
  return new Promise((resolve, reject) => {
    const req = http.request(params, res => {
      let body = "";

      res.on("data", chunk => {
        body += chunk;
      });
      res.on("end", () => {
        resolve(body);
      });
    });

    req.end();
  });
}
