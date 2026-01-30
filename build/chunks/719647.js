/** chunk id: 719647, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    n: () => o
});
var r = n(648061),
    i = n(792843),
    a = n(250015),
    o = function(e) {
        a.PP.clear(), r.g.forEach(function(t) {
            t.activeTargets.splice(0, t.activeTargets.length), t.skippedTargets.splice(0, t.skippedTargets.length), t.observationTargets.forEach(function(n) {
                n.isActive() && ((0, i.n)(n.target) > e ? t.activeTargets.push(n) : t.skippedTargets.push(n))
            })
        })
    }