/** chunk id: 709670, original params: e,t,n (module,exports,require) **/
var r = n(467957),
    i = n(168110),
    a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    o = /^\w*$/;
e.exports = function(e, t) {
    if (r(e)) return !1;
    var n = typeof e;
    return !!("number" == n || "symbol" == n || "boolean" == n || null == e || i(e)) || o.test(e) || !a.test(e) || null != t && e in Object(t)
}