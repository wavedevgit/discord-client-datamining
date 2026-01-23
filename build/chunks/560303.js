/** Chunk was on web.js **/
/** chunk id: 560303, original params: e (module,exports,require) **/
e.exports = function(e) {
    return {
        name: "Node REPL",
        contains: [{
            className: "meta.prompt",
            starts: {
                end: / |$/,
                starts: {
                    end: "$",
                    subLanguage: "javascript"
                }
            },
            variants: [{
                begin: /^>(?=[ ]|$)/
            }, {
                begin: /^\.\.\.(?=[ ]|$)/
            }]
        }]
    }
}