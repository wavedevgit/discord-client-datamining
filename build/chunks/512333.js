/** Chunk was on web.js **/
/** chunk id: 512333, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    R: () => s
});
var r = n(875521),
    i = n(766946),
    a = n(747511),
    o = n(943019),
    s = function() {
        var e = 1 / 0,
            t = [];
        r.g.forEach(function(n) {
            if (0 !== n.activeTargets.length) {
                var r = [];
                n.activeTargets.forEach(function(t) {
                    var n = new i.Z(t.target),
                        s = (0, a.n)(t.target);
                    r.push(n), t.lastReportedSize = (0, o.P)(t.target, t.observedBox), s < e && (e = s)
                }), t.push(function() {
                    n.callback.call(n.observer, r, n.observer)
                }), n.activeTargets.splice(0, n.activeTargets.length)
            }
        });
        for (var n = 0, s = t; n < s.length; n++)(0, s[n])();
        return e
    }