/** chunk id: 671966, original params: e,t,n (module,exports,require) **/
var r = n(176206),
    i = n(257816),
    a = n(317281),
    o = n(278276),
    s = n(599769),
    l = Math.max;
e.exports = function(e) {
    if (!(e && e.length)) return [];
    var t = 0;
    return e = r(e, function(e) {
        if (s(e)) return t = l(e.length, t), !0
    }), o(t, function(t) {
        return i(e, a(t))
    })
}