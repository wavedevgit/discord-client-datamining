/** Chunk was on web.js **/
/** chunk id: 800993, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
});
var r = n(559751),
    i = n(726402),
    a = n(865645),
    s = n(821085),
    o = n(264816),
    l = n(461464),
    c = n(125685),
    u = n(658614),
    d = n(140851),
    f = function(e, t) {
        return e = "function" == typeof e ? e(Object.assign({}, t.rects, {
            placement: t.placement
        })) : e, (0, c.A)("number" != typeof e ? e : (0, u.A)(e, d.OM))
    };
let p = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function(e) {
        var t, n = e.state,
            a = e.name,
            c = e.options,
            u = n.elements.arrow,
            p = n.modifiersData.popperOffsets,
            _ = (0, r.A)(n.placement),
            h = (0, o.A)(_),
            m = [d.kb, d.pG].indexOf(_) >= 0 ? "height" : "width";
        if (u && p) {
            var g = f(c.padding, n),
                E = (0, i.A)(u),
                y = "y" === h ? d.Mn : d.kb,
                b = "y" === h ? d.sQ : d.pG,
                O = n.rects.reference[m] + n.rects.reference[h] - p[h] - n.rects.popper[m],
                v = p[h] - n.rects.reference[h],
                A = (0, s.A)(u),
                I = A ? "y" === h ? A.clientHeight || 0 : A.clientWidth || 0 : 0,
                S = O / 2 - v / 2,
                T = g[y],
                C = I - E[m] - g[b],
                N = I / 2 - E[m] / 2 + S,
                w = (0, l.u)(T, N, C),
                R = h;
            n.modifiersData[a] = (t = {}, t[R] = w, t.centerOffset = w - N, t)
        }
    },
    effect: function(e) {
        var t = e.state,
            n = e.options.element,
            r = void 0 === n ? "[data-popper-arrow]" : n;
        null == r || ("string" != typeof r || (r = t.elements.popper.querySelector(r))) && (0, a.A)(t.elements.popper, r) && (t.elements.arrow = r)
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
}