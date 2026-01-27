/** Chunk was on web.js **/
/** chunk id: 295926, original params: e,t,n (module,exports,require) **/
var r = n(752909);
e.exports = function(e, t) {
    return function(n, i) {
        if (null == n) return n;
        if (!r(n)) return e(n, i);
        for (var a = n.length, o = t ? a : -1, s = Object(n);
            (t ? o-- : ++o < a) && !1 !== i(s[o], o, s););
        return n
    }
}