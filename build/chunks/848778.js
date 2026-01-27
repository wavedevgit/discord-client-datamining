/** Chunk was on web.js **/
/** chunk id: 848778, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(557939),
    i = n(446474),
    a = n(514575),
    o = n(560062),
    s = n(742388),
    l = n(2871);
r({
    target: "Promise",
    stat: !0,
    forced: n(980210)
}, {
    allSettled: function(e) {
        var t = this,
            n = o.f(t),
            r = n.resolve,
            c = n.reject,
            u = s(function() {
                var n = a(t.resolve),
                    o = [],
                    s = 0,
                    c = 1;
                l(e, function(e) {
                    var a = s++,
                        l = !1;
                    c++, i(n, t, e).then(function(e) {
                        !l && (l = !0, o[a] = {
                            status: "fulfilled",
                            value: e
                        }, --c || r(o))
                    }, function(e) {
                        !l && (l = !0, o[a] = {
                            status: "rejected",
                            reason: e
                        }, --c || r(o))
                    })
                }), --c || r(o)
            });
        return u.error && c(u.value), n.promise
    }
})