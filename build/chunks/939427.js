/** Chunk was on web.js **/
/** chunk id: 939427, original params: e (module,exports,require) **/
e.exports = function(e) {
    return {
        name: "Clojure REPL",
        contains: [{
            className: "meta.prompt",
            begin: /^([\w.-]+|\s*#_)?=>/,
            starts: {
                end: /$/,
                subLanguage: "clojure"
            }
        }]
    }
}