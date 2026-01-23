/** Chunk was on web.js **/
/** chunk id: 910654, original params: e (module,exports,require) **/
e.exports = function(e) {
    return {
        name: "LDIF",
        contains: [{
            className: "attribute",
            match: "^dn(?=:)",
            relevance: 10
        }, {
            className: "attribute",
            match: "^\\w+(?=:)"
        }, {
            className: "literal",
            match: "^-"
        }, e.HASH_COMMENT_MODE]
    }
}