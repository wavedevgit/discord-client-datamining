/** chunk id: 938231, original params: e,t,n (module,exports,require) **/
var r = n(574366),
    i = n(587779),
    a = n(926226),
    o = n(305327),
    s = 1 / 0,
    l = r ? r.prototype : void 0,
    c = l ? l.toString : void 0;

function u(e) {
    if ("string" == typeof e) return e;
    if (a(e)) return i(e, u) + "";
    if (o(e)) return c ? c.call(e) : "";
    var t = e + "";
    return "0" == t && 1 / e == -s ? "-0" : t
}
e.exports = u