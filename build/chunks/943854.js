/** chunk id: 943854 params = (module,exports,require) **/
var i = n(744439),
    r = n(261010),
    a = n(115455),
    o = n(926226),
    l = n(752909),
    s = n(758513),
    c = n(412998),
    _ = n(481702),
    u = Object.prototype.hasOwnProperty;
e.exports = function(e) {
    if (null == e) return !0;
    if (l(e) && (o(e) || "string" == typeof e || "function" == typeof e.splice || s(e) || _(e) || a(e))) return !e.length;
    var t = r(e);
    if ("[object Map]" == t || "[object Set]" == t) return !e.size;
    if (c(e)) return !i(e).length;
    for (var n in e)
        if (u.call(e, n)) return !1;
    return !0
}