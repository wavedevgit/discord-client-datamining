/** Chunk was on web.js **/
/** chunk id: 296989, original params: e,t,n (module,exports,require) **/
var r = n(670269),
    i = n(533030);

function a(e, t, n, o, s) {
    var l = -1,
        c = e.length;
    for (n || (n = i), s || (s = []); ++l < c;) {
        var u = e[l];
        t > 0 && n(u) ? t > 1 ? a(u, t - 1, n, o, s) : r(s, u) : o || (s[s.length] = u)
    }
    return s
}
e.exports = a