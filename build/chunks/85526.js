/** chunk id: 85526 params = (module,exports,require) **/
e.byteLength = function(t) {
    var e = c(t),
        s = e[0],
        r = e[1];
    return (s + r) * 3 / 4 - r
}, e.toByteArray = function(t) {
    var e, s, n = c(t),
        o = n[0],
        a = n[1],
        h = new i((o + a) * 3 / 4 - a),
        u = 0,
        _ = a > 0 ? o - 4 : o;
    for (s = 0; s < _; s += 4) e = r[t.charCodeAt(s)] << 18 | r[t.charCodeAt(s + 1)] << 12 | r[t.charCodeAt(s + 2)] << 6 | r[t.charCodeAt(s + 3)], h[u++] = e >> 16 & 255, h[u++] = e >> 8 & 255, h[u++] = 255 & e;
    return 2 === a && (e = r[t.charCodeAt(s)] << 2 | r[t.charCodeAt(s + 1)] >> 4, h[u++] = 255 & e), 1 === a && (e = r[t.charCodeAt(s)] << 10 | r[t.charCodeAt(s + 1)] << 4 | r[t.charCodeAt(s + 2)] >> 2, h[u++] = e >> 8 & 255, h[u++] = 255 & e), h
}, e.fromByteArray = function(t) {
    for (var e, r = t.length, i = r % 3, n = [], o = 0, a = r - i; o < a; o += 16383) n.push(function(t, e, r) {
        for (var i, n = [], o = e; o < r; o += 3) i = (t[o] << 16 & 0xff0000) + (t[o + 1] << 8 & 65280) + (255 & t[o + 2]), n.push(s[i >> 18 & 63] + s[i >> 12 & 63] + s[i >> 6 & 63] + s[63 & i]);
        return n.join("")
    }(t, o, o + 16383 > a ? a : o + 16383));
    return 1 === i ? n.push(s[(e = t[r - 1]) >> 2] + s[e << 4 & 63] + "==") : 2 === i && n.push(s[(e = (t[r - 2] << 8) + t[r - 1]) >> 10] + s[e >> 4 & 63] + s[e << 2 & 63] + "="), n.join("")
};
for (var s = [], r = [], i = "u" > typeof Uint8Array ? Uint8Array : Array, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0, a = n.length; o < a; ++o) s[o] = n[o], r[n.charCodeAt(o)] = o;

function c(t) {
    var e = t.length;
    if (e % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
    var s = t.indexOf("="); - 1 === s && (s = e);
    var r = s === e ? 0 : 4 - s % 4;
    return [s, r]
}
r[45] = 62, r[95] = 63