import express from "express";
import path from "path";
import React from "react";
import {renderToString} from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import Layout from "../dist/client/server";
// import Layout from "../src/containers/index";

const app = express();
import fs from 'fs'
let template = fs.readFileSync(path.join(__dirname, '../dist/client/index.html'), 'utf8');

app.use(express.static(path.resolve(__dirname, "../dist/client")));
app.get("/*", (req, res) => {
    serverRender(req, res)
});

var serverRender = async (req, res)=>{

    doSend(req, res)
}
var doSend = async (req, res) =>{
    let tpl = template;
    const context = { };
    const jsx = (
        <StaticRouter context={ context } location={ req.url }>
            <Layout />
        </StaticRouter>
    );
    let reactDom = renderToString(jsx);
    let title = '前端知识,前端框架,react,css,javascript'
    let description  = 'XiaoLong的前端博客，主要介绍了前端的知识，前端趋势，前端框架，前端基础知识，js,css,react,vue等'
    let titleStr = reactDom.match(/<kbd>(.+)<\/kbd>/)
    if(titleStr) {
        title = titleStr[1].replace(/<!-- -->/g,'')
        description = title
    }
    if(title) tpl = tpl.replace('<!--title-->', title)
    if(description) tpl = tpl.replace('<!--description-->', description)
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(tpl.replace('<!--app-->', reactDom));
}
app.listen(2048);