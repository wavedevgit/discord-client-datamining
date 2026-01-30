/** chunk id: 120858, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(439619),
    i = n(142896),
    a = n(870064),
    o = r("%Promise.resolve%", !0),
    s = o && i(o);
e.exports = function(e, t) {
    if (!s) throw new a("This environment does not support Promises.");
    return s(e, t)
}