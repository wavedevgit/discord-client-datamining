/** chunk id: 85526 params = (module,exports,require) **/
e.byteLength = function(t) {
    var e = h(t),
        s = e[0],
        i = e[1];
    return (s + i) * 3 / 4 - i
}, e.toByteArray = function(t) {
    var e, s, n = h(t),
        o = n[0],
        a = n[1],
        c = new r((o + a) * 3 / 4 - a),
        u = 0,
        _ = a > 0 ? o - 4 : o;
    for (s = 0; s < _; s += 4) e = i[t.charCodeAt(s)] << 18 | i[t.charCodeAt(s + 1)] << 12 | i[t.charCodeAt(s + 2)] << 6 | i[t.charCodeAt(s + 3)], c[u++] = e >> 16 & 255, c[u++] = e >> 8 & 255, c[u++] = 255 & e;
    return 2 === a && (e = i[t.charCodeAt(s)] << 2 | i[t.charCodeAt(s + 1)] >> 4, c[u++] = 255 & e), 1 === a && (e = i[t.charCodeAt(s)] << 10 | i[t.charCodeAt(s + 1)] << 4 | i[t.charCodeAt(s + 2)] >> 2, c[u++] = e >> 8 & 255, c[u++] = 255 & e), c
}, e.fromByteArray = function(t) {
    for (var e, i = t.length, r = i % 3, n = [], o = 0, a = i - r; o < a; o += 16383) n.push(function(t, e, i) {
        for (var r, n = [], o = e; o < i; o += 3) r = (t[o] << 16 & 0xff0000) + (t[o + 1] << 8 & 65280) + (255 & t[o + 2]), n.push(s[r >> 18 & 63] + s[r >> 12 & 63] + s[r >> 6 & 63] + s[63 & r]);
        return n.join("")
    }(t, o, o + 16383 > a ? a : o + 16383));
    return 1 === r ? n.push(s[(e = t[i - 1]) >> 2] + s[e << 4 & 63] + "==") : 2 === r && n.push(s[(e = (t[i - 2] << 8) + t[i - 1]) >> 10] + s[e >> 4 & 63] + s[e << 2 & 63] + "="), n.join("")
};
for (var s = [], i = [], r = "u" > typeof Uint8Array ? Uint8Array : Array, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0, a = n.length; o < a; ++o) s[o] = n[o], i[n.charCodeAt(o)] = o;

function h(t) {
    var e = t.length;
    if (e % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
    var s = t.indexOf("="); - 1 === s && (s = e);
    var i = s === e ? 0 : 4 - s % 4;
    return [s, i]
}
i[45] = 62, i[95] = 63