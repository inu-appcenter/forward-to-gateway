const http = require('http');
const https = require('https');

const apiGatewayInvokeUrl = 'bz9ws9s36g.execute-api.ap-northeast-2.amazonaws.com';

http.createServer().on('request', (req, res) => {

    const connector = https.request({
        host: apiGatewayInvokeUrl,
        path: req.url,
        method: req.method
    }, (resp) => {
        resp.pipe(res);
    });

    req.pipe(connector);

}).listen(3829);
