/** chunk id: 817006 params = (module,exports,require) **/
r.d(t, {
    A: () => u
});
var n = r(627968),
    a = r(735438),
    i = r.n(a),
    s = r(397927),
    l = r(828904),
    o = r(974175),
    d = r(985018);

function u(e) {
    let {
        camera: t
    } = e;
    if (null == t) return (0, n.jsx)(s.y$y, {
        type: s.y$y.Type.SPINNING_CIRCLE
    });
    let r = i().map(t, (e, t) => {
        if (!(o.R[t] || void 0 === e)) return (0, n.jsx)(o.q7, {
            label: t,
            value: e
        }, t)
    });
    return (0, n.jsxs)(s.BJc, {
        children: [(0, n.jsx)(s.Heading, {
            variant: "heading-md/medium",
            children: d.intl.string(d.t["2AGBWH"])
        }), (0, l.C6)(r)]
    })
}