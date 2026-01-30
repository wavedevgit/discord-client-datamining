/** chunk id: 517771, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(210140),
    i = n(501346),
    a = n(873078),
    o = n(4940);
e.exports = function(e, t, n) {
    for (var s = i(t), l = o.f, c = a.f, u = 0; u < s.length; u++) {
        var d = s[u];
        r(e, d) || n && r(n, d) || l(e, d, c(t, d))
    }
}