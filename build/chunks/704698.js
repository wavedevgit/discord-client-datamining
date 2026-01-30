/** chunk id: 704698, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(906046),
    i = r("Object.prototype.toString"),
    a = n(912877)(),
    o = n(429013);
if (a) {
    var s = r("Symbol.prototype.toString"),
        l = o(/^Symbol\(.*\)$/),
        c = function(e) {
            return "symbol" == typeof e.valueOf() && l(s(e))
        };
    e.exports = function(e) {
        if ("symbol" == typeof e) return !0;
        if (!e || "object" != typeof e || "[object Symbol]" !== i(e)) return !1;
        try {
            return c(e)
        } catch (e) {
            return !1
        }
    }
} else e.exports = function(e) {
    return !1
}