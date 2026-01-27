/** Chunk was on 39048 **/
/** chunk id: 586621, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(196827),
    s = n(580630),
    a = n(18743),
    o = n(233089),
    c = n(652215),
    d = n(985018),
    u = n(796416);

function g(e) {
    let {
        children: t,
        revenue: n,
        revenueTrend: g,
        summaryMetricLabel: m,
        summaryMetricValue: p,
        summaryMetricTrend: f,
        summaryMetricTrendIsPercent: h
    } = e;
    return (0, r.jsx)(i.nVY, {
        label: d.intl.string(d.t.ofmOzb),
        children: (0, r.jsxs)("div", {
            className: u.E7,
            children: [(0, r.jsxs)(o.t, {
                children: [(0, r.jsx)(a.A, {
                    label: d.intl.string(d.t.iY1jW3),
                    value: (0, s.$g)(null != n ? n : 0, c.Yri.USD),
                    additionalContent: (0, r.jsx)(l.u, {
                        value: g,
                        isPercent: !0
                    })
                }), (0, r.jsx)(a.A, {
                    label: m,
                    value: p,
                    additionalContent: (0, r.jsx)(l.u, {
                        value: f,
                        isPercent: h
                    })
                })]
            }), t]
        })
    })
}