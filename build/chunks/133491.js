/** chunk id: 133491, original params: e,t,n (module,exports,require) **/
"use strict";
var r, i = n(906046),
    a = n(429013)(/^\s*(?:function)?\*/),
    o = n(581070)(),
    s = n(428495),
    l = i("Object.prototype.toString"),
    c = i("Function.prototype.toString"),
    u = function() {
        if (!o) return !1;
        try {
            return Function("return function*() {}")()
        } catch (e) {}
    };
e.exports = function(e) {
    if ("function" != typeof e) return !1;
    if (a(c(e))) return !0;
    if (!o) return "[object GeneratorFunction]" === l(e);
    if (!s) return !1;
    if (void 0 === r) {
        var t = u();
        r = !!t && s(t)
    }
    return s(e) === r
}