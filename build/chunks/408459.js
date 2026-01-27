/** Chunk was on web.js **/
/** chunk id: 408459, original params: e,t,n (module,exports,require) **/
var r = n(300823),
    i = n(776892);
e.exports = function(e, t, n, a) {
    var o = !n;
    n || (n = {});
    for (var s = -1, l = t.length; ++s < l;) {
        var c = t[s],
            u = a ? a(n[c], e[c], c, n, e) : void 0;
        void 0 === u && (u = e[c]), o ? i(n, c, u) : r(n, c, u)
    }
    return n
}