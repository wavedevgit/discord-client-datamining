/** chunk id: 85526 params = (module,exports,require) **/
e.byteLength = function(t) {
    var e = d(t),
        n = e[0],
        i = e[1];
    return (n + i) * 3 / 4 - i
}, e.toByteArray = function(t) {
    var e, n, l = d(t),
        a = l[0],
        o = l[1],
        u = new r((a + o) * 3 / 4 - o),
        s = 0,
        c = o > 0 ? a - 4 : a;
    for (n = 0; n < c; n += 4) e = i[t.charCodeAt(n)] << 18 | i[t.charCodeAt(n + 1)] << 12 | i[t.charCodeAt(n + 2)] << 6 | i[t.charCodeAt(n + 3)], u[s++] = e >> 16 & 255, u[s++] = e >> 8 & 255, u[s++] = 255 & e;
    return 2 === o && (e = i[t.charCodeAt(n)] << 2 | i[t.charCodeAt(n + 1)] >> 4, u[s++] = 255 & e), 1 === o && (e = i[t.charCodeAt(n)] << 10 | i[t.charCodeAt(n + 1)] << 4 | i[t.charCodeAt(n + 2)] >> 2, u[s++] = e >> 8 & 255, u[s++] = 255 & e), u
}, e.fromByteArray = function(t) {
    for (var e, i = t.length, r = i % 3, l = [], a = 0, o = i - r; a < o; a += 16383) l.push(function(t, e, i) {
        for (var r, l = [], a = e; a < i; a += 3) r = (t[a] << 16 & 0xff0000) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), l.push(n[r >> 18 & 63] + n[r >> 12 & 63] + n[r >> 6 & 63] + n[63 & r]);
        return l.join("")
    }(t, a, a + 16383 > o ? o : a + 16383));
    return 1 === r ? l.push(n[(e = t[i - 1]) >> 2] + n[e << 4 & 63] + "==") : 2 === r && l.push(n[(e = (t[i - 2] << 8) + t[i - 1]) >> 10] + n[e >> 4 & 63] + n[e << 2 & 63] + "="), l.join("")
};
for (var n = [], i = [], r = "u" > typeof Uint8Array ? Uint8Array : Array, l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, o = l.length; a < o; ++a) n[a] = l[a], i[l.charCodeAt(a)] = a;

function d(t) {
    var e = t.length;
    if (e % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
    var n = t.indexOf("="); - 1 === n && (n = e);
    var i = n === e ? 0 : 4 - n % 4;
    return [n, i]
}
i[45] = 62, i[95] = 63