/** chunk id: 85526 params = (module,exports,require) **/
t.byteLength = function(e) {
    var t = o(e),
        n = t[0],
        i = t[1];
    return (n + i) * 3 / 4 - i
}, t.toByteArray = function(e) {
    var t, n, r = o(e),
        a = r[0],
        s = r[1],
        d = new l((a + s) * 3 / 4 - s),
        c = 0,
        u = s > 0 ? a - 4 : a;
    for (n = 0; n < u; n += 4) t = i[e.charCodeAt(n)] << 18 | i[e.charCodeAt(n + 1)] << 12 | i[e.charCodeAt(n + 2)] << 6 | i[e.charCodeAt(n + 3)], d[c++] = t >> 16 & 255, d[c++] = t >> 8 & 255, d[c++] = 255 & t;
    return 2 === s && (t = i[e.charCodeAt(n)] << 2 | i[e.charCodeAt(n + 1)] >> 4, d[c++] = 255 & t), 1 === s && (t = i[e.charCodeAt(n)] << 10 | i[e.charCodeAt(n + 1)] << 4 | i[e.charCodeAt(n + 2)] >> 2, d[c++] = t >> 8 & 255, d[c++] = 255 & t), d
}, t.fromByteArray = function(e) {
    for (var t, i = e.length, l = i % 3, r = [], a = 0, s = i - l; a < s; a += 16383) r.push(function(e, t, i) {
        for (var l, r = [], a = t; a < i; a += 3) l = (e[a] << 16 & 0xff0000) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]), r.push(n[l >> 18 & 63] + n[l >> 12 & 63] + n[l >> 6 & 63] + n[63 & l]);
        return r.join("")
    }(e, a, a + 16383 > s ? s : a + 16383));
    return 1 === l ? r.push(n[(t = e[i - 1]) >> 2] + n[t << 4 & 63] + "==") : 2 === l && r.push(n[(t = (e[i - 2] << 8) + e[i - 1]) >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "="), r.join("")
};
for (var n = [], i = [], l = "u" > typeof Uint8Array ? Uint8Array : Array, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, s = r.length; a < s; ++a) n[a] = r[a], i[r.charCodeAt(a)] = a;

function o(e) {
    var t = e.length;
    if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
    var n = e.indexOf("="); - 1 === n && (n = t);
    var i = n === t ? 0 : 4 - n % 4;
    return [n, i]
}
i[45] = 62, i[95] = 63