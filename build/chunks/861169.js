/** Chunk was on web.js **/
/** chunk id: 861169, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(992366).charAt,
    i = n(304880),
    a = n(883972),
    o = n(661495),
    s = n(503902),
    l = "String Iterator",
    c = a.set,
    u = a.getterFor(l);
o(String, "String", function(e) {
    c(this, {
        type: l,
        string: i(e),
        index: 0
    })
}, function() {
    var e, t = u(this),
        n = t.string,
        i = t.index;
    return i >= n.length ? s(void 0, !0) : (e = r(n, i), t.index += e.length, s(e, !1))
})