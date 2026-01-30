/** chunk id: 400696, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(906046),
    i = r("String.prototype.valueOf"),
    a = function(e) {
        try {
            return i(e), !0
        } catch (e) {
            return !1
        }
    },
    o = r("Object.prototype.toString"),
    s = "[object String]",
    l = n(581070)();
e.exports = function(e) {
    return "string" == typeof e || !!e && "object" == typeof e && (l ? a(e) : o(e) === s)
}