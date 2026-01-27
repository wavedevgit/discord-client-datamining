/** Chunk was on web.js **/
/** chunk id: 321073, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(557939),
    i = n(250594),
    a = n(503199),
    o = n(496538),
    s = n(732376),
    l = n(503628)(function() {
        return 0x100000001 !== [].push.call({
            length: 0x100000000
        }, 1)
    }),
    c = function() {
        try {
            Object.defineProperty([], "length", {
                writable: !1
            }).push()
        } catch (e) {
            return e instanceof TypeError
        }
    };
r({
    target: "Array",
    proto: !0,
    arity: 1,
    forced: l || !c()
}, {
    push: function(e) {
        var t = i(this),
            n = a(t),
            r = arguments.length;
        s(n + r);
        for (var l = 0; l < r; l++) t[n] = arguments[l], n++;
        return o(t, n), n
    }
})