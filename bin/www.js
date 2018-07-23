import express from "express";
import path from "path";
import React from "react";
import {renderToString} from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import Layout from "../dist/server/js/server";

const app = express();
import fs from 'fs'
const template = fs.readFileSync(path.join(__dirname, '../dist/client/index.html'), 'utf8');

app.use(express.static(path.resolve(__dirname, "../dist/client")));
app.get("/*", (req, res) => {
    const context = { };
    const jsx = (
        <StaticRouter context={ context } location={ req.url }>
            <Layout />
        </StaticRouter>
    );
    let reactDom = renderToString(jsx);
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(template.replace('<!--app-->', reactDom));
});

app.listen(2048);