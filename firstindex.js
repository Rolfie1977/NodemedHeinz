import express from 'express';
import http from "http";





http
	.createServer((request, response) => {
        console.log('node server kører på http://localhost:4000')
		response.writeHead(200, { "Content-Type": "text/html" });
		response.write("Hello World!");
		response.end();
	})
	.listen(4000);
