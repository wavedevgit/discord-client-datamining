/** chunk id: 837082, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(230606),
    i = n(339626),
    a = n(524152),
    o = n(633895),
    s = Object;
e.exports = o ? function(e) {
    return "symbol" == typeof e
} : function(e) {
    var t = r("Symbol");
    return i(t) && a(t.prototype, s(e))
}