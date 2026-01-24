/** Chunk was on 71138 **/
/** chunk id: 817006, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => c
});
var n = r(627968),
    a = r(735438),
    i = r.n(a),
    l = r(397927),
    s = r(828904),
    o = r(974175),
    d = r(985018);

function c(e) {
    let {
        camera: t
    } = e;
    if (null == t) return (0, n.jsx)(l.y$y, {
        type: l.y$y.Type.SPINNING_CIRCLE
    });
    let r = i().map(t, (e, t) => {
        if (!(o.R[t] || void 0 === e)) return (0, n.jsx)(o.q7, {
            label: t,
            value: e
        }, t)
    });
    return (0, n.jsxs)(l.BJc, {
        children: [(0, n.jsx)(l.Heading, {
            variant: "heading-md/medium",
            children: d.intl.string(d.t["2AGBWH"])
        }), (0, s.C6)(r)]
    })
}