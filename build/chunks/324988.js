/** chunk id: 324988, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(344815),
    i = n(339626),
    a = n(647055),
    o = n(380744)("toStringTag"),
    s = Object,
    l = "Arguments" === a(function() {
        return arguments
    }()),
    c = function(e, t) {
        try {
            return e[t]
        } catch (e) {}
    };
e.exports = r ? a : function(e) {
    var t, n, r;
    return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = c(t = s(e), o)) ? n : l ? a(t) : "Object" === (r = a(t)) && i(t.callee) ? "Arguments" : r
}