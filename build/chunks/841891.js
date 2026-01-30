/** chunk id: 841891, original params: e,t,n (module,exports,require) **/
var r = n(31289),
    i = n(752909),
    a = n(978260),
    o = n(646344);
e.exports = function(e, t, n) {
    if (!o(n)) return !1;
    var s = typeof t;
    return ("number" == s ? !!(i(n) && a(t, n.length)) : "string" == s && t in n) && r(n[t], e)
}