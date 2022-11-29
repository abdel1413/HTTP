fetch("example/data.txt")
  .then((r) => r.text())
  .then((text) => console.log(text));
let body = document.querySelector("body");

//by default fetch() methd uses get to make its request and
//doe not include request body.
//We can configure it by adding an object with extra option as
//a second arg.

fetch("example/data.txt", { method ="DELETE" })
    .then(res => console.log(res.status))

//if we get  405 status code means “method not allowed”,
//an HTTP server’s way of saying “I can’t do that”.

/**
 * To add a request body, you can include a body option.
 *  To set headers, there’s the headers option.
 *
 */
fetch("example/data.txt", { headers: { Range: "bytes = 8-19" } })
  .then((r) => r.text())
  .then((text) => console.log(text));

//this request includes a Range header, which instructs the server
//to return only part of a response.


