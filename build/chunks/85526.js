/** chunk id: 85526 params = (module,exports,require) **/
t.byteLength = function(e) {
    var t = s(e),
        n = t[0],
        l = t[1];
    return (n + l) * 3 / 4 - l
}, t.toByteArray = function(e) {
    var t, n, r = s(e),
        a = r[0],
        o = r[1],
        u = new i((a + o) * 3 / 4 - o),
        d = 0,
        c = o > 0 ? a - 4 : a;
    for (n = 0; n < c; n += 4) t = l[e.charCodeAt(n)] << 18 | l[e.charCodeAt(n + 1)] << 12 | l[e.charCodeAt(n + 2)] << 6 | l[e.charCodeAt(n + 3)], u[d++] = t >> 16 & 255, u[d++] = t >> 8 & 255, u[d++] = 255 & t;
    return 2 === o && (t = l[e.charCodeAt(n)] << 2 | l[e.charCodeAt(n + 1)] >> 4, u[d++] = 255 & t), 1 === o && (t = l[e.charCodeAt(n)] << 10 | l[e.charCodeAt(n + 1)] << 4 | l[e.charCodeAt(n + 2)] >> 2, u[d++] = t >> 8 & 255, u[d++] = 255 & t), u
}, t.fromByteArray = function(e) {
    for (var t, l = e.length, i = l % 3, r = [], a = 0, o = l - i; a < o; a += 16383) r.push(function(e, t, l) {
        for (var i, r = [], a = t; a < l; a += 3) i = (e[a] << 16 & 0xff0000) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]), r.push(n[i >> 18 & 63] + n[i >> 12 & 63] + n[i >> 6 & 63] + n[63 & i]);
        return r.join("")
    }(e, a, a + 16383 > o ? o : a + 16383));
    return 1 === i ? r.push(n[(t = e[l - 1]) >> 2] + n[t << 4 & 63] + "==") : 2 === i && r.push(n[(t = (e[l - 2] << 8) + e[l - 1]) >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "="), r.join("")
};
for (var n = [], l = [], i = "u" > typeof Uint8Array ? Uint8Array : Array, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, o = r.length; a < o; ++a) n[a] = r[a], l[r.charCodeAt(a)] = a;

function s(e) {
    var t = e.length;
    if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
    var n = e.indexOf("="); - 1 === n && (n = t);
    var l = n === t ? 0 : 4 - n % 4;
    return [n, l]
}
l[45] = 62, l[95] = 63