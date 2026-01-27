/** Chunk was on web.js **/
/** chunk id: 754271, original params: e,t,n (module,exports,require) **/
var r = n(390446),
    i = n(552982),
    a = n(708996),
    o = n(533786);
e.exports = function(e) {
    return function(t) {
        var n = i(t = o(t)) ? a(t) : void 0,
            s = n ? n[0] : t.charAt(0),
            l = n ? r(n, 1).join("") : t.slice(1);
        return s[e]() + l
    }
}