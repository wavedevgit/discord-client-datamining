/** chunk id: 596829, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(557939),
    i = n(230606),
    a = n(503628),
    o = n(627),
    s = n(304880),
    l = n(39911),
    c = i("URL"),
    u = l && a(function() {
        c.canParse()
    }),
    d = a(function() {
        return 1 !== c.canParse.length
    });
r({
    target: "URL",
    stat: !0,
    forced: !u || d
}, {
    canParse: function(e) {
        var t = o(arguments.length, 1),
            n = s(e),
            r = t < 2 || void 0 === arguments[1] ? void 0 : s(arguments[1]);
        try {
            return new c(n, r), !0
        } catch (e) {
            return !1
        }
    }
})