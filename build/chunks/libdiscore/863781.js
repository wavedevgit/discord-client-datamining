/** chunk id: 863781, original params: t,e,r (module,exports,require) **/
var n = r(446474),
    o = r(339626),
    i = r(598349),
    a = TypeError;
t.exports = function(t, e) {
    var r, u;
    if ("string" === e && o(r = t.toString) && !i(u = n(r, t)) || o(r = t.valueOf) && !i(u = n(r, t)) || "string" !== e && o(r = t.toString) && !i(u = n(r, t))) return u;
    throw new a("Can't convert object to primitive value")
}