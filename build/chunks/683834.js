/** chunk id: 683834, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var r = n(499702),
    i = n(140851),
    a = n(528346),
    o = n(559751);

function s(e, t) {
    void 0 === t && (t = {});
    var n = t,
        s = n.placement,
        l = n.boundary,
        c = n.rootBoundary,
        u = n.padding,
        d = n.flipVariations,
        f = n.allowedAutoPlacements,
        p = void 0 === f ? i.DD : f,
        _ = (0, r.A)(s),
        h = _ ? d ? i.Ol : i.Ol.filter(function(e) {
            return (0, r.A)(e) === _
        }) : i.OM,
        m = h.filter(function(e) {
            return p.indexOf(e) >= 0
        });
    0 === m.length && (m = h);
    var g = m.reduce(function(t, n) {
        return t[n] = (0, a.A)(e, {
            placement: n,
            boundary: l,
            rootBoundary: c,
            padding: u
        })[(0, o.A)(n)], t
    }, {});
    return Object.keys(g).sort(function(e, t) {
        return g[e] - g[t]
    })
}