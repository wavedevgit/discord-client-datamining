/** chunk id: 626800, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(581070)(),
    i = n(906046)("Object.prototype.toString"),
    a = function(e) {
        return (!r || !e || "object" != typeof e || !(Symbol.toStringTag in e)) && "[object Arguments]" === i(e)
    },
    o = function(e) {
        return !!a(e) || null !== e && "object" == typeof e && "length" in e && "number" == typeof e.length && e.length >= 0 && "[object Array]" !== i(e) && "callee" in e && "[object Function]" === i(e.callee)
    },
    s = function() {
        return a(arguments)
    }();
a.isLegacyArguments = o, e.exports = s ? a : o