/** chunk id: 582652, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    J: () => c
});
var r = n(336527),
    i = n(335146),
    a = n(428541),
    o = n(648061),
    s = new Map,
    l = function(e, t) {
        for (var n = 0; n < e.length; n += 1)
            if (e[n].target === t) return n;
        return -1
    },
    c = function() {
        function e() {}
        return e.connect = function(e, t) {
            var n = new a.M(e, t);
            o.g.push(n), s.set(e, n)
        }, e.observe = function(e, t, n) {
            if (s.has(e)) {
                var a = s.get(e);
                0 > l(a.observationTargets, t) && (a.observationTargets.push(new i.V(t, n && n.box)), (0, r.L)(1), r.c.schedule())
            }
        }, e.unobserve = function(e, t) {
            if (s.has(e)) {
                var n = s.get(e),
                    i = l(n.observationTargets, t);
                i >= 0 && (n.observationTargets.splice(i, 1), (0, r.L)(-1))
            }
        }, e.disconnect = function(e) {
            if (s.has(e)) {
                var t = s.get(e);
                o.g.splice(o.g.indexOf(t), 1), s.delete(e), (0, r.L)(-t.observationTargets.length)
            }
        }, e
    }()