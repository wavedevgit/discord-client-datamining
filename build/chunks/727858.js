/** chunk id: 727858, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(257943),
    i = n(614886),
    a = n(647055),
    o = n(485155),
    s = n(883972).get,
    l = RegExp.prototype,
    c = TypeError;
r && i && o(l, "dotAll", {
    configurable: !0,
    get: function() {
        if (this !== l) {
            if ("RegExp" === a(this)) return !!s(this).dotAll;
            throw new c("Incompatible receiver, RegExp required")
        }
    }
})