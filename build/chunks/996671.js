/** chunk id: 996671, original params: e,t,n (module,exports,require) **/
"use strict";
var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator,
    i = n(476744),
    a = n(696219),
    o = n(790669),
    s = n(704698),
    l = function(e, t) {
        if (null == e) throw TypeError("Cannot call method on " + e);
        if ("string" != typeof t || "number" !== t && "string" !== t) throw TypeError('hint must be "string" or "number"');
        var n, r, o, s = "string" === t ? ["toString", "valueOf"] : ["valueOf", "toString"];
        for (o = 0; o < s.length; ++o)
            if (a(n = e[s[o]]) && i(r = n.call(e))) return r;
        throw TypeError("No default value")
    },
    c = function(e, t) {
        var n = e[t];
        if (null != n) {
            if (!a(n)) throw TypeError(n + " returned for property " + String(t) + " of object " + e + " is not a function");
            return n
        }
    };
e.exports = function(e) {
    if (i(e)) return e;
    var t, n = "default";
    if (arguments.length > 1 && (arguments[1] === String ? n = "string" : arguments[1] === Number && (n = "number")), r && (Symbol.toPrimitive ? t = c(e, Symbol.toPrimitive) : s(e) && (t = Symbol.prototype.valueOf)), void 0 !== t) {
        var a = t.call(e, n);
        if (i(a)) return a;
        throw TypeError("unable to convert exotic object to primitive")
    }
    return "default" === n && (o(e) || s(e)) && (n = "string"), l(e, "default" === n ? "number" : n)
}