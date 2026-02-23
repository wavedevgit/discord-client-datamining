/** chunk id: 85526, original params: e,n (module,exports,require) **/
n.byteLength = function(e) {
    var n = d(e),
        t = n[0],
        i = n[1];
    return (t + i) * 3 / 4 - i
}, n.toByteArray = function(e) {
    var n, t, r = d(e),
        a = r[0],
        s = r[1],
        o = new l((a + s) * 3 / 4 - s),
        c = 0,
        u = s > 0 ? a - 4 : a;
    for (t = 0; t < u; t += 4) n = i[e.charCodeAt(t)] << 18 | i[e.charCodeAt(t + 1)] << 12 | i[e.charCodeAt(t + 2)] << 6 | i[e.charCodeAt(t + 3)], o[c++] = n >> 16 & 255, o[c++] = n >> 8 & 255, o[c++] = 255 & n;
    return 2 === s && (n = i[e.charCodeAt(t)] << 2 | i[e.charCodeAt(t + 1)] >> 4, o[c++] = 255 & n), 1 === s && (n = i[e.charCodeAt(t)] << 10 | i[e.charCodeAt(t + 1)] << 4 | i[e.charCodeAt(t + 2)] >> 2, o[c++] = n >> 8 & 255, o[c++] = 255 & n), o
}, n.fromByteArray = function(e) {
    for (var n, i = e.length, l = i % 3, r = [], a = 0, s = i - l; a < s; a += 16383) r.push(function(e, n, i) {
        for (var l, r = [], a = n; a < i; a += 3) l = (e[a] << 16 & 0xff0000) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]), r.push(t[l >> 18 & 63] + t[l >> 12 & 63] + t[l >> 6 & 63] + t[63 & l]);
        return r.join("")
    }(e, a, a + 16383 > s ? s : a + 16383));
    return 1 === l ? r.push(t[(n = e[i - 1]) >> 2] + t[n << 4 & 63] + "==") : 2 === l && r.push(t[(n = (e[i - 2] << 8) + e[i - 1]) >> 10] + t[n >> 4 & 63] + t[n << 2 & 63] + "="), r.join("")
};
for (var t = [], i = [], l = "u" > typeof Uint8Array ? Uint8Array : Array, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, s = r.length; a < s; ++a) t[a] = r[a], i[r.charCodeAt(a)] = a;

function d(e) {
    var n = e.length;
    if (n % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
    var t = e.indexOf("="); - 1 === t && (t = n);
    var i = t === n ? 0 : 4 - t % 4;
    return [t, i]
}
i[45] = 62, i[95] = 63