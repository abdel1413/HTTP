/**
 * GET /18_http.html HTTP/1.1
 * http has 4 methods:
 * GET to get the resource from the server
 * PUT to create or replace  the resource into the sever
 * POST to send the information to the server
 * DELETE to delete info/resource from the server;
 *
 * NOTE:
 * the second part of request in this case (18_http.html) is name of file
 * and the third part is the version of HTTP protocole
 *
 *
 * The server's response to the request:
 * HTTP/1.1 200 OK
 *
 * It start with the "version of the HTTP" (HTTP/1.1 ), then status code
 * (200). Code starting with 2 (200 for HTTP) means "success" and that
 * starting with 4 (404 for HTTP) means "Something went wrong with
 * the request" followed by human readable string "OK" meaning  it is ok
 *  Status code starting with 5 (500) means an error happened on the
 * server and the request is not to blame
 *
 * the first line of request or response may be followed by headers
 * Headers give more info about the request or response.
 * exp:
 * Content-Length: 65585  => size of the document
 *Content-Type: text/html => type of the doc
 *  Last-Modified: Thu, 04 Jan 2018 14:05:30 GMT => last date modified.
 *
 *
 * GET and DELETE don't send along any data
 * PUT and POST do.
 *
 * Error responses don't require body
 */
