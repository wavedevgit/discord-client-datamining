/** Chunk was on web.js **/
/** chunk id: 938796, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(860511),
    i = n(257943),
    a = n(485155),
    o = n(693510),
    s = n(503628),
    l = r.RegExp,
    c = l.prototype;
i && s(function() {
    var e = !0;
    try {
        l(".", "d")
    } catch (t) {
        e = !1
    }
    var t = {},
        n = "",
        r = e ? "dgimsy" : "gimsy",
        i = function(e, r) {
            Object.defineProperty(t, e, {
                get: function() {
                    return n += r, !0
                }
            })
        },
        a = {
            dotAll: "s",
            global: "g",
            ignoreCase: "i",
            multiline: "m",
            sticky: "y"
        };
    for (var o in e && (a.hasIndices = "d"), a) i(o, a[o]);
    return Object.getOwnPropertyDescriptor(c, "flags").get.call(t) !== r || n !== r
}) && a(c, "flags", {
    configurable: !0,
    get: o
})