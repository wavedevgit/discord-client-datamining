/** chunk id: 9561, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
});
var r = n(709943),
    i = n(559751),
    a = n(482786),
    o = n(528346),
    s = n(683834),
    l = n(140851),
    c = n(499702);

function u(e) {
    if ((0, i.A)(e) === l.qZ) return [];
    var t = (0, r.A)(e);
    return [(0, a.A)(e), t, (0, a.A)(t)]
}
let d = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function(e) {
        var t = e.state,
            n = e.options,
            a = e.name;
        if (!t.modifiersData[a]._skip) {
            for (var d = n.mainAxis, f = void 0 === d || d, p = n.altAxis, _ = void 0 === p || p, h = n.fallbackPlacements, m = n.padding, g = n.boundary, E = n.rootBoundary, y = n.altBoundary, b = n.flipVariations, O = void 0 === b || b, v = n.allowedAutoPlacements, A = t.options.placement, I = (0, i.A)(A), S = I === A, T = h || (S || !O ? [(0, r.A)(A)] : u(A)), C = [A].concat(T).reduce(function(e, n) {
                    return e.concat((0, i.A)(n) === l.qZ ? (0, s.A)(t, {
                        placement: n,
                        boundary: g,
                        rootBoundary: E,
                        padding: m,
                        flipVariations: O,
                        allowedAutoPlacements: v
                    }) : n)
                }, []), N = t.rects.reference, w = t.rects.popper, R = new Map, P = !0, D = C[0], L = 0; L < C.length; L++) {
                var x = C[L],
                    M = (0, i.A)(x),
                    j = (0, c.A)(x) === l.ni,
                    k = [l.Mn, l.sQ].indexOf(M) >= 0,
                    U = k ? "width" : "height",
                    G = (0, o.A)(t, {
                        placement: x,
                        boundary: g,
                        rootBoundary: E,
                        altBoundary: y,
                        padding: m
                    }),
                    F = k ? j ? l.pG : l.kb : j ? l.sQ : l.Mn;
                N[U] > w[U] && (F = (0, r.A)(F));
                var V = (0, r.A)(F),
                    B = [];
                if (f && B.push(G[M] <= 0), _ && B.push(G[F] <= 0, G[V] <= 0), B.every(function(e) {
                        return e
                    })) {
                    D = x, P = !1;
                    break
                }
                R.set(x, B)
            }
            if (P)
                for (var H = O ? 3 : 1, Y = function(e) {
                        var t = C.find(function(t) {
                            var n = R.get(t);
                            if (n) return n.slice(0, e).every(function(e) {
                                return e
                            })
                        });
                        if (t) return D = t, "break"
                    }, W = H; W > 0 && "break" !== Y(W); W--);
            t.placement !== D && (t.modifiersData[a]._skip = !0, t.placement = D, t.reset = !0)
        }
    },
    requiresIfExists: ["offset"],
    data: {
        _skip: !1
    }
}