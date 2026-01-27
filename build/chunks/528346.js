/** Chunk was on web.js **/
/** chunk id: 528346, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
});
var r = n(420474),
    i = n(688899),
    a = n(514467),
    o = n(638704),
    s = n(395177),
    l = n(140851),
    c = n(444746),
    u = n(125685),
    d = n(658614);

function f(e, t) {
    void 0 === t && (t = {});
    var n = t,
        f = n.placement,
        p = void 0 === f ? e.placement : f,
        _ = n.strategy,
        h = void 0 === _ ? e.strategy : _,
        m = n.boundary,
        g = void 0 === m ? l.WY : m,
        E = n.rootBoundary,
        y = void 0 === E ? l.R9 : E,
        b = n.elementContext,
        O = void 0 === b ? l.xf : b,
        v = n.altBoundary,
        A = void 0 !== v && v,
        I = n.padding,
        S = void 0 === I ? 0 : I,
        T = (0, u.A)("number" != typeof S ? S : (0, d.A)(S, l.OM)),
        C = O === l.xf ? l.ir : l.xf,
        N = e.rects.popper,
        w = e.elements[A ? C : O],
        R = (0, r.A)((0, c.vq)(w) ? w : w.contextElement || (0, i.A)(e.elements.popper), g, y, h),
        P = (0, a.A)(e.elements.reference),
        D = (0, o.A)({
            reference: P,
            element: N,
            strategy: "absolute",
            placement: p
        }),
        L = (0, s.A)(Object.assign({}, N, D)),
        x = O === l.xf ? L : P,
        M = {
            top: R.top - x.top + T.top,
            bottom: x.bottom - R.bottom + T.bottom,
            left: R.left - x.left + T.left,
            right: x.right - R.right + T.right
        },
        j = e.modifiersData.offset;
    if (O === l.xf && j) {
        var k = j[p];
        Object.keys(M).forEach(function(e) {
            var t = [l.pG, l.sQ].indexOf(e) >= 0 ? 1 : -1,
                n = [l.Mn, l.sQ].indexOf(e) >= 0 ? "y" : "x";
            M[e] += k[n] * t
        })
    }
    return M
}