/** chunk id: 424266, original params: t,i,e (module,exports,require) **/
var s = e(325041),
    a = e(841891),
    h = e(89582),
    r = Math.ceil,
    n = Math.max;
t.exports = function(t, i, e) {
    i = (e ? a(t, i, e) : void 0 === i) ? 1 : n(h(i), 0);
    var o = null == t ? 0 : t.length;
    if (!o || i < 1) return [];
    for (var l = 0, _ = 0, c = Array(r(o / i)); l < o;) c[_++] = s(t, l, l += i);
    return c
}