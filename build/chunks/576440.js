/** chunk id: 576440, original params: e (module,exports,require) **/
e.exports = function(e) {
    return {
        name: "Julia REPL",
        contains: [{
            className: "meta.prompt",
            begin: /^julia>/,
            relevance: 10,
            starts: {
                end: /^(?![ ]{6})/,
                subLanguage: "julia"
            }
        }],
        aliases: ["jldoctest"]
    }
}