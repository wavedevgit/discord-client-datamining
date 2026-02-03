/** chunk id: 564976, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
});
var r = n(140851),
    i = n(559751),
    a = n(264816),
    o = n(300449),
    s = n(461464),
    l = n(726402),
    c = n(821085),
    u = n(528346),
    d = n(499702),
    f = n(839275),
    p = n(273101);
let _ = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: function(e) {
        var t = e.state,
            n = e.options,
            _ = e.name,
            h = n.mainAxis,
            m = void 0 === h || h,
            g = n.altAxis,
            E = void 0 !== g && g,
            y = n.boundary,
            b = n.rootBoundary,
            O = n.altBoundary,
            v = n.padding,
            A = n.tether,
            I = void 0 === A || A,
            S = n.tetherOffset,
            T = void 0 === S ? 0 : S,
            C = (0, u.A)(t, {
                boundary: y,
                rootBoundary: b,
                padding: v,
                altBoundary: O
            }),
            N = (0, i.A)(t.placement),
            w = (0, d.A)(t.placement),
            R = !w,
            P = (0, a.A)(N),
            D = (0, o.A)(P),
            L = t.modifiersData.popperOffsets,
            x = t.rects.reference,
            M = t.rects.popper,
            j = "function" == typeof T ? T(Object.assign({}, t.rects, {
                placement: t.placement
            })) : T,
            k = "number" == typeof j ? {
                mainAxis: j,
                altAxis: j
            } : Object.assign({
                mainAxis: 0,
                altAxis: 0
            }, j),
            U = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
            G = {
                x: 0,
                y: 0
            };
        if (L) {
            if (m) {
                var F, V = "y" === P ? r.Mn : r.kb,
                    B = "y" === P ? r.sQ : r.pG,
                    H = "y" === P ? "height" : "width",
                    Y = L[P],
                    W = Y + C[V],
                    K = Y - C[B],
                    z = I ? -M[H] / 2 : 0,
                    q = w === r.ni ? x[H] : M[H],
                    Z = w === r.ni ? -M[H] : -x[H],
                    Q = t.elements.arrow,
                    X = I && Q ? (0, l.A)(Q) : {
                        width: 0,
                        height: 0
                    },
                    J = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : (0, f.A)(),
                    $ = J[V],
                    ee = J[B],
                    et = (0, s.u)(0, x[H], X[H]),
                    en = R ? x[H] / 2 - z - et - $ - k.mainAxis : q - et - $ - k.mainAxis,
                    er = R ? -x[H] / 2 + z + et + ee + k.mainAxis : Z + et + ee + k.mainAxis,
                    ei = t.elements.arrow && (0, c.A)(t.elements.arrow),
                    ea = ei ? "y" === P ? ei.clientTop || 0 : ei.clientLeft || 0 : 0,
                    eo = null != (F = null == U ? void 0 : U[P]) ? F : 0,
                    es = Y + en - eo - ea,
                    el = Y + er - eo,
                    ec = (0, s.u)(I ? (0, p.jk)(W, es) : W, Y, I ? (0, p.T9)(K, el) : K);
                L[P] = ec, G[P] = ec - Y
            }
            if (E) {
                var eu, ed = "x" === P ? r.Mn : r.kb,
                    ef = "x" === P ? r.sQ : r.pG,
                    ep = L[D],
                    e_ = "y" === D ? "height" : "width",
                    eh = ep + C[ed],
                    em = ep - C[ef],
                    eg = -1 !== [r.Mn, r.kb].indexOf(N),
                    eE = null != (eu = null == U ? void 0 : U[D]) ? eu : 0,
                    ey = eg ? eh : ep - x[e_] - M[e_] - eE + k.altAxis,
                    eb = eg ? ep + x[e_] + M[e_] - eE - k.altAxis : em,
                    eO = I && eg ? (0, s.P)(ey, ep, eb) : (0, s.u)(I ? ey : eh, ep, I ? eb : em);
                L[D] = eO, G[D] = eO - ep
            }
            t.modifiersData[_] = G
        }
    },
    requiresIfExists: ["offset"]
}