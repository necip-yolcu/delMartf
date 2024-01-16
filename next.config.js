/*
* Martfury - Multipurpose Marketplace React Ecommerce Template
* Author: nouthemes
* Homepage: https://themeforest.net/user/nouthemes/portfolio
* Created at: 2019-11-15T08:00:00+07:00
* Updated at: 2020-11-06T15:29:20+07:00

* */
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const cors = require('cors');

const nextSettings = {
    env: {
        title: 'Martfury',
        titleDescription: 'Multipurpose Marketplace React Ecommerce Template',
    },
};

module.exports = withPlugins(
        [withImages(), nextSettings],
        {
            async headers() {
                return [
                        {
                        // matching all API routes
                        source: "/api/:path*",
                        headers: [
                            { key: "Access-Control-Allow-Credentials", value: "true" },
                            { key: "Access-Control-Allow-Origin", value: "*" },
                            { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
                            { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                        ]
                        }
                    ];
            },
            serverMiddleware: [
                // Enable CORS for all routes locally
                cors(),
            ],
        }
    );
