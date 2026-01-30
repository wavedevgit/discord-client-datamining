/** chunk id: 393431, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(739305),
    i = n(503199),
    a = n(120394),
    o = r.aTypedArray;
(0, r.exportTypedArrayMethod)("at", function(e) {
    var t = o(this),
        n = i(t),
        r = a(e),
        s = r >= 0 ? r : n + r;
    return s < 0 || s >= n ? void 0 : t[s]
})