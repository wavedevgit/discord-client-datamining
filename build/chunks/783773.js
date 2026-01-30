/** chunk id: 783773, original params: e,t,n (module,exports,require) **/
"use strict";
var r, i = n(326948),
    a = n(267768);
try {
    r = [].__proto__ === Array.prototype
} catch (e) {
    if (!e || "object" != typeof e || !("code" in e) || "ERR_PROTO_ACCESS" !== e.code) throw e
}
var o = !!r && a && a(Object.prototype, "__proto__"),
    s = Object,
    l = s.getPrototypeOf;
e.exports = o && "function" == typeof o.get ? i([o.get]) : "function" == typeof l && function(e) {
    return l(null == e ? e : s(e))
}